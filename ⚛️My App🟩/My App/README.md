# Product Management API

A robust, modern, and easy-to-use RESTful API for managing products, built with Node.js, Express, and MongoDB. This project is perfect for learning backend development, rapid prototyping, or as a foundation for a full-stack application.

---

## 🚀 Features

- **Full CRUD**: Create, Read, Update, and Delete products.
- **RESTful Endpoints**: Clean and predictable API structure.
- **MongoDB Integration**: Uses Mongoose for schema and data modeling.
- **Environment Variables**: Secure configuration with dotenv.
- **CORS Enabled**: Ready for cross-origin requests.
- **Modular Structure**: Organized controllers, models, and routes.

---

## 🛠️ Technologies Used

- **Node.js** & **Express**: Fast, minimalist server.
- **MongoDB** & **Mongoose**: Flexible, scalable NoSQL database.
- **dotenv**: Secure environment variable management.
- **cors**: Cross-Origin Resource Sharing middleware.
- **nodemon**: Auto-restart server during development.

---

## 📦 Project Structure

```
My App/
├── controllers/
│   └── ProductController.js
├── models/
│   └── ProductModels.js
├── routes/
│   └── ProductRoutes.js
├── server.js
├── package.json
└── .env
```

---

## 📚 API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | `/products`        | Get all products       |
| GET    | `/products/:id`    | Get a product by ID    |
| POST   | `/products/create` | Create a new product   |
| PUT    | `/products/:id`    | Update a product by ID |
| DELETE | `/products/:id`    | Delete a product by ID |


---

## ⚡ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/ARAhmadDeveloper/Ahmad5/tree/master/%E2%9A%9B%EF%B8%8FMy%20App%F0%9F%9F%A9/My%20App
   cd Product-Management-API
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**

   - Create a `.env` file in the root directory:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Start the server**
   ```bash
   npm start
   ```
   The server will run at [http://localhost:3000](http://localhost:3000)

---

## 📝 Product Schema

- **name**: String (required)
- **price**: Number (required)
- **category**: String (required)
- **quantity**: Number (required)
- **date**: Date (auto-generated)

---

## 💡 Example Usage

- Fetch all products: `GET /products`
- Add a product: `POST /products/create` with JSON body
- Update a product: `PUT /products/:id` with JSON body
- Delete a product: `DELETE /products/:id`

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <h2>Created with <span style="color: #e25555;">&#10084;&#65039;</span> by</h2>
  <h1>
    <a href="https://github.com/ARAhmadDeveloper" style="text-decoration: none; color: #2d72fc; font-size: 2.5rem;">
      <span style="background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        ARAhmadDeveloper
      </span>
    </a>
  </h1>
</div>
