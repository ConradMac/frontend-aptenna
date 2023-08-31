// import React from "react";
import Logo from "./../assets/logo-officiel-Aptenna.png";
// import TeamDropdown from "./TeamDropdown";
import "./../styles/Footer.css";

function Footer() {
    // const teamMembers = [
    //     { name: "Member 1", profileLink: "/member1" },
    //     { name: "Member 2", profileLink: "/member2" },
    //     { name: "Member 3", profileLink: "/member3" },
    //     // Ajoutez les détails des autres membres ici
    // ];
    return (
        <footer className="footer">
            <div className="column">
                <h3>Informations</h3>
                <ul className="list-footer">
                    <li className="link-footer-list">
                        <a href="#">FAQ</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">Mentions légales</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">CGU CGV</a>
                    </li>
                    {/* <li className="link-footer-list">
                        <a href="#">RGPD</a>
                    </li> */}
                </ul>
            </div>
            <div className="column">
                <h3>Nos prestations</h3>
                <ul className="list-footer">
                    <li className="link-footer-list">
                        <a href="#">Prestation 1</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">Prestation 2</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">Prestation 3</a>
                    </li>
                    {/* <TeamDropdown teamMembers={teamMembers} /> */}
                </ul>
            </div>
            <div className="column">
                <h3>Nous contacter</h3>
                <p>email : contact@example.com</p>
                <p>Tél : +1234567890</p>
            </div>
            <div className="column logo-column">
                <img className="Logo-Footer" src={Logo} alt="Logo-Footer" />
            </div>
        </footer>
    );
}

export default Footer;
