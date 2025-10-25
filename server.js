require('dotenv').config(); //Calling the environment variables

const express = require('express'); //Calling the express fnction from node_modules
const app = express();
const PORT = process.env.PORT;
const products = require('./data/products');

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

app.use(express.json()); //In-built express middleware for json parsing

// Root route (homepage) of the API
app.get('/', (req, res) => {
  // Send a simple text response to confirm the API is running
  res.send('Product Inventory API is running');
});
