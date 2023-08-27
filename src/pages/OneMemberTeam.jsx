import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageUser from "./../assets/user-image.png";
import "./../styles/OneMemberTeam.css";
import { useContext } from "react";
import { UserContext } from "../context/authContext";

const API_URL = import.meta.env.VITE_API_URL;

function OneMemberTeam() {
    let params = useParams();
    //    let user_id = params.user_id;
    const { user } = useContext(UserContext);
    console.log("USER ID", user);

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const updatedUser = await axios.get(`${API_URL}/api/users/${user_id}`);
    //             console.log("UPDATE USER", updatedUser.data);
    //             setUser(updatedUser.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchUserData();
    // }, [user_id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="OneMemberTeam">
                <div>
                    <img className="profil-image-user" src={ImageUser} alt="image_user" />
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
            <div className="profil-techno-prestation">
                <p>Technologies: {user.technologies}</p>
                <p>Prestations: {user.prestations}</p>
            </div>
        </div>
    );
}

export default OneMemberTeam;
