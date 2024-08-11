const mongoose = require('mongoose');

const BidderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    bids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid'
    }]
});

module.exports = mongoose.model('Bidder', BidderSchema);
