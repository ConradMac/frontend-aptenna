// import { useContext } from "react";
// import { UserContext } from "./AuthContextWrapper";

// function AuthorizationCheck({ userId, children }) {
//     const { user } = useContext(UserContext);

//     if (!user) {
//         // User pas authenticated
//         return null;
//     }

//     if (user.role === "Admin" || user._id === userId) {
//         // User soit Admin ou le proprio du profile
//         return children;
//     } else {
//         // User pasautorisé
//         return <p>You are not authorized to modify this profile.</p>;
//     }
// }

// export default AuthorizationCheck;
