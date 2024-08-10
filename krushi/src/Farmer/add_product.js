import React, { useState } from 'react';
import axios from 'axios';
import './Add_product.css';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        State: '',
        Product: '',
        Year: 2024,
        Production: '',
        Consumption: '',
        Expected_Price: '',
        Rainfall: '',
        Temperature: '',
        Fertilizer_Usage: '',
        Irrigated_Area: '',
        Pesticide_Usage: '',
        Soil_Quality: '',
        Market_Demand: '',
        Government_Support: '',
        Farm_Size: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send data to the backend to store in MongoDB
            const response = await axios.post('http://localhost:5000/store', formData);
            alert('Product data stored successfully. Predicting price...');

            // After storing, you might want to fetch the predicted price
            const predictionResponse = await axios.get(`http://localhost:5000/predict/${response.data._id}`);
            alert(`Predicted Price: ${predictionResponse.data.predictedPrice}`);
        } catch (error) {
            console.error("Error handling request", error);
        }
    };

    return (
        <div>
            <h2>Add Product for Prediction</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label>{key}:</label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">Predict Price</button>
            </form>
        </div>
    );
};

export default AddProduct;
