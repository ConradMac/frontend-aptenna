import React from "react";
import Logo from "./../assets/logo-officiel-Aptenna.png";
import "./../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="column">
                <h4>Informations</h4>
                <ul>
                    <li className="link-footer-list">
                        <a href="#">FAQ</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">Mentions légales</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">CGU CGV</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">RGPD</a>
                    </li>
                </ul>
            </div>
            <div className="column">
                <h4>Nos prestations</h4>
                <ul>
                    <li className="link-footer-list">
                        <a href="#">Prestation 1</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">Prestation 2</a>
                    </li>
                    <li className="link-footer-list">
                        <a href="#">Prestation 3</a>
                    </li>
                </ul>
            </div>
            <div className="column">
                <h4>Nous contacter</h4>
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
