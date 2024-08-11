const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/krushi', { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new mongoose.Schema({
    // Define your schema here
    Predicted_Price: Number,
});
const Product = mongoose.model('Product', ProductSchema);

// Endpoint to store data and run prediction
app.post('/store', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();

        // Run the Python script and pass the product ID to it
        exec(`python path/to/predict_and_update.py ${product._id}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return res.status(500).send('Error running Python script');
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            res.status(200).json({ _id: product._id, message: 'Product data stored and prediction updated successfully' });
        });
    } catch (error) {
        console.error("Error storing data", error);
        res.status(500).send('Error storing data');
    }
});

// Endpoint to get predicted price
app.get('/predict/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found');
        res.status(200).json({ predictedPrice: product.Predicted_Price });
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).send('Error fetching data');
    }
});

const cors = require('cors');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to MongoDB'));

// Schema and Model
const farmerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    contactNumber: String,
    password: String,
    city: String,
    state: String,
    role: String
});
const bidderSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    contactNumber: String,
    password: String,
    city: String,
    state: String,
    role: String
});

const Farmer = mongoose.model('Farmer', farmerSchema);
const Bidder = mongoose.model('Bidder', bidderSchema);

// Routes
app.post('/api/signup', async (req, res) => {
    try {
        if (req.body.role == 'Farmer') {
            const farmer = new Farmer(req.body);
            await farmer.save();
            res.status(201).json(farmer);
        }
        else if (req.body.role == 'Bidder') {
            const bidder = new Bidder(req.body);
            await bidder.save();
            res.status(201).json(bidder);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
