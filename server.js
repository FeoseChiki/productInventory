require('dotenv').config(); //Calling the environment variables
const PORT = process.env.PORT || 3000;

const express = require('express'); //Calling the express function from node_modules
const app = express();
const products = require('./data/products');

app.use(express.json()); //In-built express middleware for json parsing

// Root route (homepage) of the API
app.get('/', (req, res) => {
  // Send a simple text response to confirm the API is running
  res.send('Product Inventory API is running');
});

// Route to get all products
app.get('/products', (req, res) => {
  // Check if the products array is empty
  // If there are no products, return a 404 status with a message
  if (products.length === 0) {
    return res.status(404).json({
      message: 'No products found',
      data: []
    });
  }

  // If products exist, send them back with a 200 (OK) status
  res.status(200).json({
    message: 'Products retrieved successfully',
    data: products
  });
});

// Route to add new products
app.post('/products', (req, res) => {
  const { id, name, price, InStock } = req.body;

  //Validation
  if (!id || !name || !price || !InStock) {
    return res.status(400).json({ message: 'All fields (id, name, price, InStock) are required ' });
  }

  //Add to the product list
  products.push({ id, name, price, InStock });

  res.status(201).json({
    message: 'Product added successfully',
    data: { id, name, price, InStock }
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});