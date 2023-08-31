import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageUser from "./../assets/user-image.png";
import "./../styles/OneMemberTeam.css";
import myApi from "../api/service";
import { Link } from "react-router-dom";
import { UserContext } from "../context/authContext";
import { useContext } from "react";

// const API_URL = import.meta.env.VITE_API_URL;

function OneMemberTeam() {
    const [displayedUser, setUser] = useState(null); // Définis une variable d'état pour stocker les données du membre ok !!!!!!!!!

    const [prestations, setPrestations] = useState([]); // Ajoutez cet état

    // const [isAdmin, setIsAdmin] = useState(false); // Ajoute un état pour vérifier si l'utilisateur est un administrateur, okay !!!!!!!!!

    let params = useParams();

    const { user } = useContext(UserContext); // pour recup donné

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // pour les requettes, il faut mieux itiloser myApi pour acceder au token. car on a automatisé l'ajout du token dans les requettes (headers)
                const response = await myApi.get(`/api/users/${params.id}`);
                console.log("USER DATA", response.data);
                setUser(response.data.user); // Définissez les données du membre ici
                setPrestations(response.data.prestation);
            } catch (error) {
                console.error(error);
                return <div>Error loading user data</div>;
            }
        };

        fetchUserData();
    }, [params.id]);

    const deletePrestation = async (prestationId) => {
        try {
            const response = await myApi.delete(`/api/prestations/${prestationId}`);
            console.log("Prestation deleted:", response.data);
            // Update the prestations list after deletion
            setPrestations(prestations.filter((prestation) => prestation._id !== prestationId));
        } catch (error) {
            console.error("Error deleting prestation:", error);
        }
    };

    if (!displayedUser) {
        return <div>Loading...</div>;
    }
    const owner = user?._id === params.id;
    console.log(owner, user);
    // const isAuthenticated = localStorage.getItem("token") ? true : false;
    return (
        <>
            <div className="main-form-OneMember">
                <div className="OneMemberTeam">
                    <div className="profil-information-user">
                        <div className="information-details">
                            <img
                                className="profil-image-user"
                                src={displayedUser.picture || ImageUser} // Utilisez la propriété "picture" ou l'image par défaut si aucune image n'est disponible
                                alt={`${displayedUser.firstName} ${displayedUser.lastName}`}
                            />
                        </div>
                        <h2 className="subtitle-nameMember">
                            {displayedUser.firstName} {displayedUser.lastName}
                        </h2>
                        <p>{displayedUser.email}</p>
                        <p>
                            {displayedUser.address}, {displayedUser.zipcode} {displayedUser.city}
                        </p>
                        <p>{displayedUser.phone}</p>
                        {/* <p>Current status :</p>
                        <p>Role: {displayedUser.role}</p> */}
                    </div>
                </div>
                {/* <div className="profil-techno-prestation">
                <p>Technologies: {user.technologies}</p>
                <p>Prestations: {prestations.length}</p>
            </div> */}
                {prestations && prestations.length > 0 && (
                    <div className="profil-techno-prestation">
                        <p>Prestations:</p>
                        <ul className="block-information-member prestations-list">
                            {prestations.map((prestation) => (
                                <ul className="OneMember-profile-page" key={prestation._id}>
                                    <div className="services">
                                        <li className="list-services-oneMemberTeam">
                                            {" "}
                                            Technologies : {prestation.title}
                                        </li>
                                        <li className="list-services-oneMemberTeam">
                                            Description : {prestation.description}
                                        </li>
                                        <li className="list-services-oneMemberTeam">
                                            {" "}
                                            Service rate : {prestation.price} €
                                        </li>
                                    </div>
                                    <div className="button-profile-page">
                                        {(owner || user?.role === "SuperAdmin") && (
                                            <>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => deletePrestation(prestation._id)}
                                                >
                                                    Delete
                                                </button>
                                                <Link
                                                    className="update-button"
                                                    to={`/prestation/${prestation._id}/update`}
                                                >
                                                    Update
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </ul>
                            ))}
                            <p>Technologies: {displayedUser.technologies}</p>
                        </ul>
                    </div>
                )}
            </div>
            <div className="block-area-button-OneMemberTeam">
                <div className="button-container">
                    {/* Bouton pour accéder à PrestationForm si l'utilisateur est authentifié */}
                    {owner ||
                        (user?.role === "SuperAdmin" && (
                            <Link to={`/prestationform/${params.id}`} className="button-link">
                                Aller à PrestationForm
                            </Link>
                        ))}
                </div>

                <div className="button-container">
                    {/* Bouton pour accéder à la page de mise à jour du profil */}

                    {owner ||
                        (user?.role === "SuperAdmin" && (
                            <Link to={`/user/${params.id}/update`} className="button-link">
                                Update Profile
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );
}

export default OneMemberTeam;
