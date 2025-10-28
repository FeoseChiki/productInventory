# 🛍️ Product Inventory API

A simple Node.js and Express-based API for managing and retrieving product inventory data.  
This project demonstrates basic API routing, environment variable configuration, and JSON response handling.

---

## 🚀 Features

- Fetch all available products  
- Structured JSON responses  
- Environment variable support using **dotenv**  
- Organized project structure for scalability  
- Built with **Express.js**

---

## 🧱 Project Structure

```
product-inventory-api/
│
├── data/
│   └── products.js        # Mock product data
│
├── .env                   # Environment variables (e.g., PORT)
├── server.js              # Main application entry point
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/product-inventory-api.git
   cd product-inventory-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root and add the following:

   ```env
   PORT=5000
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   Or if you’re using **nodemon** for auto-restart during development:

   ```bash
   npm run dev
   ```

---

## 🧩 API Endpoints

### **Root Route**

**GET** `/`  
Returns a simple message to confirm the API is running.

**Response:**
```json
"Product Inventory API is running"
```

---

### **Get All Products**

**GET** `/products`

**Success Response (200):**
```json
{
  "message": "Products retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Product A",
      "price": 100
    }
  ]
}
```

**Error Response (404):**
```json
{
  "message": "No products found",
  "data": []
}
```

---

## 🧠 Example `data/products.js`

```js
module.exports = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 }
];
```

---

## 🧰 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 💡 Future Improvements

- Add POST, PUT, DELETE routes for CRUD functionality  
- Connect to a real database (e.g., MongoDB or PostgreSQL)  
- Add authentication and validation  
- Deploy to a cloud platform (e.g., Render, Railway, or Vercel)

---

## 👨‍💻 Author

**Who Knows Aluminum Ventures**  
📍 Kasoa Ayigbe Town  
📞 0554042322  
