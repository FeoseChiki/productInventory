// function to get a product by id
const products = require('./products');// Import the products array

function getProduct(req, res) {
    // Ensure an id param was provided
    const idParam = req.params && req.params.id;
    if (!idParam) {
        return res.status(400).json({ message: 'Product id is required in the route parameter.' });
    }
    const productId = parseInt(idParam, 10);
    if (Number.isNaN(productId)) 
        return res.status(400).json({ message: 'Product id must be a valid integer.' });
     // Find product by id
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });// checks for non-existing product id
    }
    if (product.InStock === 0) {
        return res.status(200).json({
            message: 'Product is out of stock',
            data: product
        });// checks for zero stock value and returns out of stock message
    }
    return res.status(200).json({
        message: 'Product retrieved successfully',
        data: product
    });
}

module.exports = { getProduct };