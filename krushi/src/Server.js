const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process'); // Import child_process for executing scripts
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new mongoose.Schema({
    // Define your schema here
});
const Product = mongoose.model('Product', ProductSchema);

// Endpoint to store data
app.post('/store', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();

        // Run the Python script after saving the product
        exec('python path/to/predict_and_update.py', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return res.status(500).send('Error running Python script');
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            res.status(200).send('Product data stored and prediction updated successfully');
        });
    } catch (error) {
        console.error("Error storing data", error);
        res.status(500).send('Error storing data');
    }
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
