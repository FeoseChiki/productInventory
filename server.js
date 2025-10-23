require('dotenv').congig(); //Calling the environment variables

const express = require('express'); //Calling the express fnction from node_modules
const app = express();
const PORT = process.env.PORT;
const products = require('./data/products');

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

app.use(express.json()); //In-built express middleware for json parsing