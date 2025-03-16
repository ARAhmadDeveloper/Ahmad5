const mongoose = require('mongoose');
const express = require("express");
const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://ar1008264:p5WwdEKyD0SRqffq@cluster0.t1oqd.mongodb.net/');
console.log("Connected Successfully")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}





// Define a simple route
app.get("/", (req, res) => {
    res.send("Server is running");
  });
  
  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });











