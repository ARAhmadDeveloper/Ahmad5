const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors");
const ProductRouter = require("./routes/ProductRoutes");
const dotenv = require("dotenv");
app.use(express.json());
dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
console.log("Connected Successfully")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.use(express.json()); // ✅ Correct Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json());


// Define a simple route
app.get("/", (req, res) => {
    res.send("Server is running");
  });
  
  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


  app.use("/", ProductRouter);








