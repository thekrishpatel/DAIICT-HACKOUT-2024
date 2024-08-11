import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bid.css'; // Import CSS for styling

const Bid = () => {
    const [products, setProducts] = useState([]);
    const [bidAmount, setBidAmount] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the auctioned products from the backend
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
                const initialBids = {};
                response.data.forEach(product => {
                    initialBids[product._id] = product.highestBid;
                });
                setBidAmount(initialBids);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError('Failed to load products. Please try again later.');
                setLoading(false);
            });
    }, []);

    const handleBidIncrease = (productId, increment) => {
        const newBid = bidAmount[productId] + increment;
        // Ensure the new bid is higher than the previous highest bid
        if (newBid > bidAmount[productId]) {
            setBidAmount({ ...bidAmount, [productId]: newBid });

            // Update the bid on the backend
            axios.post(`/api/products/${productId}/bid`, { newBid })
                .then(response => {
                    console.log('Bid updated successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error updating bid:', error);
                    setError('Failed to update the bid. Please try again later.');
                });
        }
    };

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="bid-container">
            {products.map(product => (
                <div key={product._id} className="bid-box">
                    <h3>{product.name}</h3>
                    <p>Base Price: ₹{product.basePrice}</p>
                    <p>Highest Bid: ₹{bidAmount[product._id]}</p>
                    <button
                        className="increase-bid-button"
                        onClick={() => handleBidIncrease(product._id, product.increment)}
                        disabled={bidAmount[product._id] >= product.basePrice + product.increment}
                    >
                        Increase Bid by ₹{product.increment}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Bid;
