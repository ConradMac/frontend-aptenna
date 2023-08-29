import React, { useState } from "react";
import myApi from "../api/service";
import { useParams } from "react-router-dom";
import "./../styles/PrestationForm.css";

function PrestationForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price = 0, setPrice] = useState(0);

    const params = useParams();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await myApi.post(`/api/prestations`, {
                title,
                description,
                price,
            });
            console.log("response", response.data);
            console.log("Prestation created:", response.data);
            setTitle("");
            setDescription("");
            setPrice(0);
        } catch (error) {
            console.error("Error creating prestation:", error);
        }
    };

    return (
        <div className="form-createAPrestation">
            <h2>Create a New Prestation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default PrestationForm;
