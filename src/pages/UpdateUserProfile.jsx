import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import myApi from "../api/service";
import { useContext } from "react";
import { UserContext } from "../context/authContext";
import "./../styles/updatedUserProfil.css";

function UpdateUserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState("");

    const params = useParams();

    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await myApi.get(`/api/users/${params.id}`);
                const userData = response.data.user;
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
                setEmail(userData.email);
                setAddress(userData.address);
                setCity(userData.city);
                setZipcode(userData.zipcode);
                setPhone(userData.phone);
                setPicture(userData.picture);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [params.id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await myApi.put(`/api/users/${params.id}`, {
                firstName,
                lastName,
                email,
                address,
                city,
                zipcode,
                phone,
                picture,
            });
            console.log("User updated:", response.data);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="form-updateUser">
            <h2>Update User Information</h2>
            <form className="form-updated-user" onSubmit={handleUpdate}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Picture:</label>
                    <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
                </div>

                <button type="submit">Update</button>
            </form>

            <Link to={`/team/${user?._id}`}>Back to User Profile</Link>
        </div>
    );
}

export default UpdateUserForm;
