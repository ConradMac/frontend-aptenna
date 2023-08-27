import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo-officiel-Aptenna.png";
import "./../styles/Navbar.css";
import { UserContext } from "../context/authContext";

function Navbar() {
    const { isLoggedIn, authenticateUser } = useContext(UserContext); // Utilisation du hook useAuth

    function logout() {
        localStorage.removeItem("token");
        authenticateUser();
    }

    return (
        <nav className="navbar">
            <div className="logo">
                {/* Place your logo image here */}
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
                        <Link className="onglet-navbar-link link-underline" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className="auth-links">
                    {isLoggedIn ? (
                        // Afficher Logout si l'utilisateur est connecté
                        <li>
                            <button className="onglet-navbar-link link-underline" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    ) : (
                        // Afficher Login si l'utilisateur n'est pas connecté
                        <li>
                            <Link className="onglet-navbar-link link-underline" to="/login">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
