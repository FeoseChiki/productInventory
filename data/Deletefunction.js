// function to delete a product by id
const products = require('./products');// Import the products array

function deleteProduct(req, res) {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products.splice(index, 1);
  res.status(204).send();
}

module.exports = { deleteProduct };