// // DeletePrestationButton.js
// import React from "react";
// import myApi from "../api/service";

// function DeletePrestationButton({ prestationId }) {
//     const deletePrestation = async (prestationId) => {
//         try {
//             const response = await myApi.delete(`/api/prestations/${prestationId}`);
//             console.log("Prestation deleted:", response.data);
//         } catch (error) {
//             console.error("Error deleting prestation:", error);
//         }
//     };

//     return <button onClick={() => deletePrestation(prestationId)}>Delete</button>;
// }

// export default DeletePrestationButton;
