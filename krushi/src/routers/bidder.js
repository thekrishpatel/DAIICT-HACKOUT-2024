const express = require('express');
const router = express.Router();
const Bidder = require('../models/Bidder');

router.post('/add', async (req, res) => {
    const { name, email, contact } = req.body;

    try {
        const newBidder = new Bidder({ name, email, contact });
        await newBidder.save();
        res.status(201).json(newBidder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
