// Route handlers for Product Inventory API
// Import the products array from the products.js file
const products = require('./products');

// Function to get all products
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

// Function to add a new product
function addProduct(req, res){
  const body = req.body || {};
  let nextid = 1;
  if (products.length > 0)
    {nextid = Math.max(...products.map(p => p.id)) + 1;
    } else {
      nextid = products.lenght + 1;
    }
  const { name } = body;
  let { price, InStock } = body;

  //Convert price and InStock to numbers and check validity
  price = Number(price);
  if (price <= 0) {
    return  res.status(400).json({ message: 'Price must be a positive number' });
  }
  InStock = Number(InStock);
    if (InStock < 0 || !Number.isInteger(InStock)) {
    return  res.status(400).json({ message: 'InStock cannot be negative' });
  }
  // Keys Validation
  if ( name == null || price == null || InStock == null ) {
    return res.status(400).json({ message: 'Fields (name, price, InStock) are required' });
  }

  //Add to the product list
  const newproduct = { id: nextid, name, price, InStock };
  products.push(newproduct);

  //Send response
  res.status(201).json({
    message: 'Product added successfully',
    data: newproduct
  });
};

// Function to edit existing product details
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

// function to delete a product by id
function deleteProduct(req, res) {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products.splice(index, 1);
  res.status(204).send();
}

// function to get a product by id
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

module.exports = { 
  getProduct,
  getProducts,
  addProduct,
  patchProduct,
  deleteProduct
};