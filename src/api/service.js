import axios from "axios";

const myApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

myApi.interceptors.request.use((request) => {
    console.log("Token from localStorage:"); // Ajoutez cette ligne pour déboguer
    request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    // if (authToken) {
    //     request.headers.Authorization = `Bearer ${authToken}`;
    // }
    return request;
});

myApi.verifyUser = function () {
    return myApi.get("/api/auth/verify");
};

// myApi.filterCohort = function (queryString) {
//     return myApi.get(`/api/cohorts?${queryString}`);
// };
// myApi.getAllCohorts = function () {
//     return myApi.get("/api/cohorts");
// };

export default myApi;
