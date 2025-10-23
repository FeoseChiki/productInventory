require('dotenv').congig();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

app.use(express.json());
