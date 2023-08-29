import { useState, useEffect } from "react";
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
                            Our team is made up of passionate, talented, and dedicated individuals, each bringing their
                            unique expertise to make our company a true success. Together, we share a common vision and
                            work hand in hand to achieve our ambitious goals.
                        </p>
                    </div>
                    <div className="single-text-team-page">
                        <h2>Collaboration et Synergie</h2>
                        <p className="paragraphe-team">
                            Collaboration lies at the heart of our corporate culture. We strongly believe that brilliant
                            minds work better together. Our exchange of ideas, sharing of knowledge, and collaborative
                            approach enable us to innovate and tackle challenges with creativity and enthusiasm.
                        </p>
                    </div>
                </div>

                <div className="team-list">
                    {teamMembers.map((member) => (
                        <div key={member._id} className="team-member">
                            <Link to={`/team/${member._id}`} className="link">
                                <img
                                    className="image-team"
                                    src={member.picture}
                                    alt={`${member.firstName} ${member.lastName}`}
                                />
                                <h2 className="team-name">{`${member.firstName} ${member.lastName}`}</h2>
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
