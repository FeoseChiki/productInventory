//Adds a new product to the database
const products = require('./products');// Import the products array

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

module.exports = { addProduct };