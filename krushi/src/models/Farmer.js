const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = mongoose.model('Farmer', FarmerSchema);
