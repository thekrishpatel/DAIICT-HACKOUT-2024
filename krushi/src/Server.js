const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });

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

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
