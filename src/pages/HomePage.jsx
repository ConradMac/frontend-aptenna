import { useState, useEffect } from "react";
// import axios from "axios";
import Logo from "./../assets/logo-officiel-Aptenna.png";
import Python from "./../assets/technos/python.png";
import ReactPic from "./../assets/technos/nodeJs.jpg";
import Node from "./../assets/technos/react.png";
import Javascript from "./../assets/technos/javascript.png";
import Button from "./../Components/Button";
import "./../styles/HomePage.css";
import "./../index.css";
import "./../styles/Button.css";

// const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
    const [teamImages, setTeamImages] = useState([]);

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
                        technical and business projects, we have honed our expertise. Whether it's daring startups or
                        renowned conglomerates, our adaptability enables us to overcome all challenges with confidence
                    </p>
                </div>
            </div>
            <div className="block-random-team">
                <div className="team-images">
                    {teamImages.map((imageURL, index) => (
                        <img key={index} src={imageURL} alt={`Team Member ${index + 1}`} />
                    ))}
                </div>
                <div className="logo-aptenna-random">
                    <img src={Logo} alt="logo aptenna" />
                </div>
            </div>
            <div className="title-homePage-redic-button">
                <h2>Avec nous pensez votre projet</h2>
                {/* <button className="btn btn__secondary">button Form Contact</button> */}
                <Button>button Form Contact</Button>
            </div>
            <div className="slide-techno">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="container rounded">
                            <h1 className="text-center">TECHNOLOGIES USED</h1>
                            <div className="slider">
                                <div className="logos">
                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={Python} alt="" />
                                    </i>
                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={ReactPic} alt="" />
                                    </i>
                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={Node} alt="" />
                                    </i>

                                    <i className="fab fa-js fa-4x">
                                        <img className="logos-techno-slide" src={Javascript} alt="" />
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
