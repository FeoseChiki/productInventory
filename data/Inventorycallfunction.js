// data/Inventorycallfunction.js
// Import the products array from the products.js file
const products = require('./products');


function getProducts(req, res) {
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
}

module.exports = { getProducts };