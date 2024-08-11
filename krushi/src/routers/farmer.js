const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');

router.post('/add', async (req, res) => {
    const { name, email, contact } = req.body;

    try {
        const newFarmer = new Farmer({ name, email, contact });
        await newFarmer.save();
        res.status(201).json(newFarmer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
