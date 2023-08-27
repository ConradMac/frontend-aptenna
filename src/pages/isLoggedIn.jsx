// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { UserContext } from "../context/authContext";

// function isLoggedIn() {
//     const { isLoggedIn } = useContext(UserContext);

//     if (isLoggedIn) {
//         return <Navigate to="/login" />;
//     }
// }

// export default isLoggedIn;

// TEST

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/authContext";

function isLoggedIn() {
    const { isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return null; // Retourne null si l'utilisateur est connecté
}

export default isLoggedIn;
