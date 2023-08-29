import React, { useState, useEffect } from "react";
import axios from "axios";
import bannerHeader from "./../assets/team.jpg";
import "./../styles/Team.css";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005"; // Remplacez par l'URL correcte de votre API

function TeamPage() {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/users`).then((response) => {
            console.log(response.data);
            setTeamMembers(response.data);
        });
    }, []);

    return (
        <div className="team-page">
            <div className="cover-image">
                <img src={bannerHeader} alt="Logo" />{" "}
            </div>
            <div className="profile-images-team">
                <div className="text-team-page">
                    <div className="single-text-team-page">
                        <h2>Our Team</h2>
                        <p className="paragraphe-team">
                            Notre équipe est composée d'individus passionnés, talentueux et dévoués, chacun apportant
                            son expertise unique pour faire de notre entreprise un véritable succès. Ensemble, nous
                            partageons une vision commune et travaillons main dans la main pour atteindre nos objectifs
                            ambitieux.
                        </p>
                    </div>
                    <div className="single-text-team-page">
                        <h2>Collaboration et Synergie</h2>
                        <p className="paragraphe-team">
                            La collaboration est au cœur de notre culture d'entreprise. Nous croyons fermement que des
                            esprits brillants travaillent mieux ensemble. Nos échanges d'idées, notre partage de
                            connaissances et notre approche collaborative nous permettent d'innover et de relever les
                            défis avec créativité et enthousiasme.
                        </p>
                    </div>
                </div>

                <div className="team-list">
                    {teamMembers.map((member) => (
                        <div key={member._id} className="team-member">
                            <Link to={`/member/${member._id}`} className="link">
                                <img
                                    className="image-team"
                                    src={member.picture}
                                    alt={`${member.firstName} ${member.lastName}`}
                                />
                                <h2>{`${member.firstName} ${member.lastName}`}</h2>
                                {/* <p>{member.title}</p> */}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamPage;
