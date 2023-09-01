import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import myApi from "../api/service";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./../styles/UpdatedPrestationForm.css";

import { UserContext } from "../context/authContext";

function UpdatePrestationForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const { user } = useContext(UserContext);

    const params = useParams();

    useEffect(() => {
        const fetchPrestationData = async () => {
            try {
                const response = await myApi.get(`/api/prestations/${params.id}`);
                const prestationData = response.data;
                setTitle(prestationData.title);
                setDescription(prestationData.description);
                setPrice(prestationData.price);
            } catch (error) {
                console.error("Error fetching prestation data:", error);
            }
        };

        fetchPrestationData();
    }, [params.id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await myApi.put(`/api/prestations/${params.id}`, {
                title,
                description,
                price,
            });
            console.log("Prestation updated:", response.data);
        } catch (error) {
            console.error("Error updating prestation:", error);
        }
    };

    return (
        <div className="form-updatePrestation">
            <h2>Update Prestation</h2>
            <form className="form-updated-form" onSubmit={handleUpdate}>
                <div className="label-form-block-area-updated-">
                    <label>Title:</label>
                    <input
                        placeholder="Title"
                        className="btn btn-secondary"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="label-form-block-area-updated-">
                    <label>Description:</label>
                    <textarea
                        placeholder="Description"
                        className="btn btn-secondary textArea-form-updated"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="label-form-block-area-updated-">
                    <label>Price:</label>
                    <input
                        placeholder="Price €"
                        className="btn btn-secondary"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="updated-teamPage-block-area">
                    <button className="btn btn-secondary" type="submit">
                        Update
                    </button>

                    {/* <Link to={`/team/${user?._id}`} className="back-link btn btn-secondary">
                        Go back to Member
                    </Link> */}
                    {user && (
                        <Link to={`/team/${user._id}`} className="back-link btn btn-secondary">
                            Go back to Member
                        </Link>
                    )}
                </div>
            </form>
        </div>
    );
}

export default UpdatePrestationForm;
