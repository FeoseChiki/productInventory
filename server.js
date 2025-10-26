require('dotenv').config(); //Calling the environment variables

const express = require('express'); //Calling the express fnction from node_modules
const app = express();
const PORT = process.env.PORT;
const productRouter = require('./data/products');

app.use(express.json()); //In-built express middleware for json parsing
app.use('/',productRouter); //Using the router file as middleware

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

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
