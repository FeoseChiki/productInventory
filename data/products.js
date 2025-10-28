// data/products.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'products.json');

const loadProducts = () => {
  try {
    const data = fs.readFileSync(productsFile, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveProducts = (products) => {
  fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
};

let products = loadProducts();

if (products.length === 0) {
  products = [
  // Samsung
  {
    id: 1,
    name: "Samsung S22 Ultra",
    price: 600,
    InStock: 10
  },
  {
    id: 2,
    name: "Samsung Galaxy A54",
    price: 400,
    InStock: 15
  },
  {
    id: 3,
    name: "Samsung Z Flip 5",
    price: 900,
    InStock: 5
  },

  // iPhone
  {
    id: 4,
    name: "iPhone 14 Pro",
    price: 1200,
    InStock: 8
  },
  {
    id: 5,
    name: "iPhone 13",
    price: 950,
    InStock: 10
  },
  {
    id: 6,
    name: "iPhone SE (2022)",
    price: 500,
    InStock: 12
  },

  // Pixel
  {
    id: 7,
    name: "Google Pixel 7 Pro",
    price: 850,
    InStock: 9
  },
  {
    id: 8,
    name: "Google Pixel 6a",
    price: 450,
    InStock: 14
  },
  {
    id: 9,
    name: "Google Pixel Fold",
    price: 1300,
    InStock: 4
  },

  // Huawei
  {
    id: 10,
    name: "Huawei P60 Pro",
    price: 700,
    InStock: 7
  },
  {
    id: 11,
    name: "Huawei Mate 50",
    price: 800,
    InStock: 6
  },
  {
    id: 12,
    name: "Huawei Nova 11",
    price: 550,
    InStock: 10
  },

  // Motorola
  {
    id: 13,
    name: "Motorola Edge 40",
    price: 600,
    InStock: 8
  },
  {
    id: 14,
    name: "Motorola G73",
    price: 350,
    InStock: 15
  },
  {
    id: 15,
    name: "Motorola Razr 40",
    price: 900,
    InStock: 6
  }
  ];
}

// GET all products
router.get('/products', (req, res) => {
  res.status(200).json({
    message: 'All products retrieved successfully',
    data: products
  });
});

// GET one product by ID
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// ADD new product
router.post('/products', (req, res) => {
  if (!req.body || !req.body.name || !req.body.price || !req.body.InStock) {
    return res.status(400).json({ message: 'Missing required fields: name, price, InStock' });
  }

  const { name, price, InStock } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    InStock
  };

  products.push(newProduct);
  saveProducts(products);
  res.status(201).json({
    message: 'Product added successfully',
    data: newProduct
  });
});

// UPDATE a product
router.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, InStock } = req.body;

  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Update only the fields provided
  if (name) product.name = name;
  if (price) product.price = price;
  if (InStock) product.InStock = InStock;

  saveProducts(products);
  res.status(200).json({
    message: 'Product updated successfully',
    data: product
  });
});

// DELETE a product
router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(index, 1);
  saveProducts(products);

  res.json({
    message: 'Product deleted successfully',
    data: products
  });
});

module.exports = router ;