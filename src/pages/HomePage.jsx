// import { useState, useEffect } from "react";
import Logo from "./../assets/logo-officiel-Aptenna.png";
import Python from "./../assets/technos/python.png";
import ReactPic from "./../assets/technos/nodeJs.jpg";
import Node from "./../assets/technos/react.png";
import Javascript from "./../assets/technos/javascript.png";
import Go from "./../assets/technos/Go_Logo_Aqua.svg.png";
import CodingTeam from "./../assets/codingTeam.png";

import Button from "./../Components/Button";
import "./../styles/HomePage.css";
import "./../index.css";
import "./../styles/Button.css";
import { Link } from "react-router-dom";

// const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
    // const [teamImages, setTeamImages] = useState([]);

    return (
        <div className="homePage">
            <div className="text-homePage">
                <div className="title-homePAge-block">
                    <h3 className="title-homePage">Amoureux des défis technologiques</h3>
                </div>
                <div className="seo-homepage-text">
                    <p className="para-text-homePage">
                        Our quest for excellence is dedicated to each of our clients. Thus, we embrace the most
                        pragmatic approach, with complete transparency, collaborating hand in hand with you and your
                        teams at every stage of the development process. Drawing from our experience in high-stakes
                        technical and business projects, we have honed our expertise. Whether it is daring startups or
                        renowned conglomerates, our adaptability enables us to overcome all challenges with confidence
                    </p>
                </div>
            </div>
            <div className="block-random-team">
                {/* <div className="team-images">
                    {teamImages.map((imageURL, index) => (
                        <img key={index} src={imageURL} alt={`Team Member ${index + 1}`} />
                    ))}
                </div> */}
                <div className="logo-aptenna-random">
                    <img src={Logo} alt="logo aptenna" />
                    <img src={CodingTeam} alt="logo aptenna" />
                </div>
            </div>
            <div className="title-homePage-redic-button">
                <h2>Avec nous pensez votre projet ! </h2>
                {/* <button className="btn btn__secondary">button Form Contact</button> */}
                <div className="paragraphe-With-us-think">
                    <h3>
                        With us, envision and shape your project! Our dedicated team is here to support you at every
                        step of your journey. Whether you have an innovative idea in mind or you are looking to
                        streamline your existing processes, our pragmatic and transparent approach ensures close
                        collaboration. Drawing from our experience in significant technical and business projects, we
                        showcase our expertise to address your challenges with confidence. Whether it is daring startups
                        or well-established enterprises, our adaptability empowers us to conquer all challenges with
                        assurance. At our core, your project becomes our mission
                    </h3>
                </div>
                <Link to="/contact">
                    <Button>button Form Contact</Button>
                </Link>
            </div>
            <div className="slide-techno">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="container rounded">
                            <h1 className="text-center">TECHNOLOGIES USED</h1>
                            <div className="slider">
                                <div className="logos">
                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={Python} alt="langage Pyhton" />
                                    </i>
                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={ReactPic} alt="Langage React" />
                                    </i>
                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={Node} alt="Langage Node js" />
                                    </i>

                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={Javascript} alt="Langage Javascript" />
                                    </i>
                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={Go} alt="Langage Go" />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
