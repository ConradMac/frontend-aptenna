import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo-officiel-Aptenna.png";
import "./../styles/Navbar.css";
import { UserContext } from "../context/authContext";
import Logout from "./../assets/icons-logs/logout.png";
import Login from "./../assets/icons-logs/login.jpg";

function Navbar() {
    const { isLoggedIn, authenticateUser } = useContext(UserContext);

    function logout() {
        localStorage.removeItem("token");
        authenticateUser();
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navbar-onglet">
                <ul className="nav-links">
                    <li>
                        <Link className="onglet-navbar-link link-underline" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="onglet-navbar-link link-underline" to="/team">
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link className="onglet-navbar-link link-underline" to="/prestation">
                            Prestation
                        </Link>
                    </li>
                    <li>
                        <Link className="onglet-navbar-link link-underline" to="/Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className="auth-links">
                    {isLoggedIn ? (
                        <li>
                            <button className="onglet-navbar-link link-underline logout-icon" onClick={logout}>
                                <img className="img-logout" src={Logout} alt="Logout" />
                            </button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link className="onglet-navbar-link link-underline" to="/login">
                                    <img className="img-login" src={Login} alt="Login" />
                                </Link>
                            </li>
                            <li>
                                <Link className="onglet-navbar-link link-underline" to="/signup">
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
