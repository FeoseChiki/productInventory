// FUnction to edit existing product details
const products = require('./products');// Import the products array

function patchProduct(req, res) {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
    if (!product) return res.status(404).json({ message: 'Product not found' })
    Object.assign(product, req.body);// Update product with request body

    //Send response
    res.status(200).json({
      message: 'Product updated successfully',
      data: product
    });
}

module.exports = { patchProduct };
