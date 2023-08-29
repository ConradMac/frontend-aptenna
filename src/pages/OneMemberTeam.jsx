// import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageUser from "./../assets/user-image.png";
import "./../styles/OneMemberTeam.css";
import myApi from "../api/service";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../context/authContext";

const API_URL = import.meta.env.VITE_API_URL;

function OneMemberTeam() {
    const [user, setUser] = useState(null); // Définis une variable d'état pour stocker les données du membre ok !!!!!!!!!

    const [prestations, setPrestations] = useState([]); // Ajoutez cet état

    const [isAdmin, setIsAdmin] = useState(false); // Ajoute un état pour vérifier si l'utilisateur est un administrateur, okay !!!!!!!!!

    let params = useParams();
    // const [currentUser, setCurrentUser] = useState();
    //    let user_id = params.user_id;
    // const { user } = useContext(UserContext);
    // console.log(user);

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

    if (!user) {
        return <div>Loading...</div>;
    }

    const isAuthenticated = localStorage.getItem("token") ? true : false;
    return (
        <div>
            <div className="OneMemberTeam">
                <div>
                    <img
                        className="profil-image-user"
                        src={user.picture || ImageUser} // Utilisez la propriété "picture" ou l'image par défaut si aucune image n'est disponible
                        alt={`${user.firstName} ${user.lastName}`}
                    />
                </div>
                <div className="profil-information-user">
                    <h2>
                        Nom : {user.firstName} {user.lastName}
                    </h2>
                    <p>Email: {user.email}</p>
                    <p>
                        Address: {user.address}, {user.zipcode} {user.city}
                    </p>
                    <p>Phone: {user.phone}</p>
                    <p>Current status :</p>
                    <p>Role: {user.role}</p>
                </div>
            </div>
            {/* <div className="profil-techno-prestation">
                <p>Technologies: {user.technologies}</p>
                <p>Prestations: {prestations.length}</p>
            </div> */}
            {prestations && prestations.length > 0 && (
                <div className="profil-techno-prestation">
                    <p>Technologies: {user.technologies}</p>
                    <p>Prestations:</p>
                    <ul>
                        {prestations.map((prestation) => (
                            <li key={prestation._id}>
                                <li> {prestation.title}</li>
                                <li> {prestation.description}</li> <li>{prestation.price}</li>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div>
                {/* Bouton pour accéder à PrestationForm si l'utilisateur est authentifié */}
                {isAuthenticated && (
                    <Link to={`/prestationform/${params.id}`} className="button-link">
                        Aller à PrestationForm
                    </Link>
                )}
            </div>
        </div>
    );
}

export default OneMemberTeam;
