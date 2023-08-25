import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextWrapper from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <React.StrictMode>
            <AuthContextWrapper>
                <App />
            </AuthContextWrapper>
        </React.StrictMode>
    </Router>
);
