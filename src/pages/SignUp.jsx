import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/authContext";

import "./../styles/Signup.css";

const API_URL = import.meta.env.VITE_API_URL;

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [address, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");

    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const { authenticateUser } = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
        const userToCreate = { email, password, lastName, firstName, address, city, zipcode, phone };

        axios
            .post(`${API_URL}/api/auth/signup`, userToCreate)
            .then((response) => {
                console.log(response.data);
                navigate("/login");
            })
            .catch((e) => {
                console.log(e);

                if (e.response) {
                    setError(e.response.data.message);
                    setTimeout(() => {
                        setError("");
                    }, 3000);
                }
            });
    }
    return (
        <form className="form-signup" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" />
            </div>

            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" />
            </div>

            <div>
                <label htmlFor="address">Adress:</label>
                <input type="text" value={address} onChange={(e) => setAdress(e.target.value)} id="adress" />
            </div>

            <div>
                <label htmlFor="city">City:</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} id="city" />
            </div>

            <div>
                <label htmlFor="zipcode">Zip Code:</label>
                <input type="text" value={zipcode} onChange={(e) => setZipCode(e.target.value)} id="zipCode" />
            </div>

            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" />
            </div>

            {error && <p className="error">{error}</p>}
            <button>Sign up</button>
        </form>
    );
}

export default Signup;
