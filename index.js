const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define a Schema
const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    rating: Number,
    discount: Number,
    availability: String
});

// Create a Model
const Product = mongoose.model('Product', productSchema);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// POST route to add a new product
app.post('/products', (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET route to fetch all products
app.get('/products', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET route to fetch top 'n' products by rating, price or any criteria
app.get('/products/top', (req, res) => {
    const { limit, sortBy } = req.query;
    Product.find().sort({ [sortBy]: -1 }).limit(Number(limit))
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});