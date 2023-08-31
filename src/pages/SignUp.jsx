import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../styles/Signup.css";
import myApi from "../api/service";
import Button from "../Components/Button";

// const API_URL = import.meta.env.VITE_API_URL;

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [address, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");

    const [pictures, setPictures] = useState([]);

    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData();
        fd.append("picture", pictures);
        fd.append("email", email);
        fd.append("password", password);
        fd.append("lastName", lastName);
        fd.append("firstName", firstName);
        fd.append("address", address);
        fd.append("city", city);
        fd.append("zipcode", zipcode);
        fd.append("phone", phone);

        console.log("FLUTEEEEEEEEEEEEEEEEeeee", fd);

        // const userToCreate = { email, password, lastName, firstName, address, city, zipcode, phone, pictures };

        myApi
            .post(`/api/auth/signup`, fd)
            .then((response) => {
                console.log(response.data);
                navigate("/login");
            })
            .catch((e) => {
                console.log(e);

                if (e.response) {
                    console.log(e.response.data.message);
                    setError(e.response.data.message);
                    setTimeout(() => {
                        setError("");
                    }, 3000);
                }
            });
    }

    return (
        <div>
            <form className="form-signup" onSubmit={handleSubmit}>
                <div className="form-input">
                    <div>
                        <label htmlFor="lastName">LastName:</label>
                        <input
                            className="input-container btn btn__secondary"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            id="lastName"
                        />
                    </div>

                    <div>
                        <label htmlFor="firstName">FirstName:</label>
                        <input
                            className="input-container btn btn__secondary"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            id="firstName"
                        />
                    </div>
                </div>
                <div className="form-input">
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input
                            className="input-container btn btn__secondary"
                            type="text"
                            value={address}
                            onChange={(e) => setAdress(e.target.value)}
                            id="adress"
                        />
                    </div>

                    <div>
                        <label htmlFor="city">City:</label>
                        <input
                            className="input-container btn btn__secondary"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            id="city"
                        />
                    </div>
                </div>
                <div className="form-input">
                    <div>
                        <label htmlFor="zipcode">Zip Code:</label>
                        <input
                            className="input-container btn btn__secondary"
                            type="text"
                            value={zipcode}
                            onChange={(e) => setZipCode(e.target.value)}
                            id="zipCode"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            className="input-container btn btn__secondary"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            id="phone"
                        />
                    </div>
                </div>
                <div className="form-input">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className="input-container btn btn__secondary"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            className="input-container btn btn__secondary"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                        />
                    </div>
                </div>
                {/* <div>
                <label htmlFor="image">Image:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} id="image" />
            </div> */}
                <fieldset className="extra-photo-profil">
                    <legend>Extra</legend>
                    <label htmlFor="picture">Picture: </label>
                    <input
                        type="file"
                        id="picture"
                        // multiple={true}
                        onChange={(e) => setPictures(e.target.files[0])}
                    />
                </fieldset>
                {error && <p className="error">{error}</p>}
                <Button>Sign Up</Button>
            </form>

            {/* Display uploaded pictures */}
        </div>
    );
}

export default Signup;
