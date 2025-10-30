require('dotenv').config(); //Calling the environment variables
const PORT = process.env.PORT || 3000;

const express = require('express'); //Calling the express function from node_modules
const app = express();
const { 
  getProducts,
  addProduct,
  patchProduct,
  deleteProduct,
  getProduct
} = require('./Controllers/Routes_handlers');// 

app.use(express.json()); //In-built express middleware for json parsing

// Root route (homepage) of the API
app.get('/', (req, res) => {
  res.send('Product Inventory API is running');
});// Sends a simple text response to confirm the API is running

// Route to get all products
app.get('/products', getProducts);// assign GET route to the imported function
  
// Route to add new products
app.post('/products', addProduct);// assign POST route to the imported function

// Route to edit existing product details
app.patch('/products/:id', patchProduct);// assign PATCH route to the imported function

// Route to delete a product by id
app.delete('/products/:id', deleteProduct);// assign DELETE route to the imported function

// Route to get a product by id
app.get('/products/:id', getProduct);// assign GET route to the imported function


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});

app.use((err, req, res, next) => {
    res.status(500).json({error: 'Server error!'});
});

app.use((req, res,) => {
  res.status(404).json({message: "Invalid route"});
});