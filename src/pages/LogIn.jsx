import { useState, useContext } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// impoter le context pour pouvoir utiliser la fonction authenticateUser, capiche koko
import { UserContext } from "../context/authContext";
import myApi from "../api/service";

import "./../styles/LogIn.css";

// const API_URL = import.meta.env.VITE_API_URL;

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Utilisation du hook useAuth pour obtenir la fonction authenticateUser
    const { authenticateUser } = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
        const userToLogin = { email, password };
        myApi
            .post(`/api/auth/login`, userToLogin)
            .then((response) => {
                console.log(response);

                localStorage.setItem("token", response.data.authToken);
                authenticateUser();
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                if (error.response) {
                    setError(error.response.data.message);
                    setTimeout(() => {
                        setError("");
                    }, 3000);
                }
            });
    }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="email-input">
                <label htmlFor="email">Email:</label>
                <input
                    className="input-container btn btn__secondary"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                />
            </div>
            <div className="password-input">
                <label htmlFor="password">Password:</label>
                <input
                    className="input-container btn btn__secondary"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button className="btn btn__secondary">Login</button>
        </form>
    );
}

export default LoginPage;
