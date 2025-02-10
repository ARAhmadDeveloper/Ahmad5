const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const secretKey =  process.env.SECRET_KEY;
const User = require("../models/userModel");

const doLogin = async (req, res) => {
    try {
      if(!req?.body?.email){
        res.status(501).json({
          data: [],
          message: "Error in login",
          error: "Email is required",
        });
      }
  
      if(!req?.body?.password){
        res.status(501).json({
          data: [],
          message: "Error in login",
          error: "Password is required",
        });
      }
      let findUser = await User.findOne({email: req?.body?.email});
      if(!findUser){
        res.status(501).json({
          data: [], 
          message: "Error in login",
          error: "User not found",
        });
      }
      let isPasswordCorrect = await bcrypt.compareSync(req?.body?.password, findUser.password);
      if(!isPasswordCorrect){
        res.status(501).json({
          data: [],
          message: "Error in login",
          error: "Password is incorrect",
        });
      }
      let token = jwt.sign({_id: findUser._id, email: findUser.email, name: findUser.name}, secretKey);
      console.log("Token: ", token);
      
  
      res.status(200).json({
        data: {
          email: findUser?.email,
          name: findUser?.name,
          address: findUser?.address,
          createdAt: findUser?.createdAt,
          token: token,
        },
        message: "User logged in successfully",
      });
    } catch (error) {  
      res.status(501).json({
        data: [],
        message: "Error in login",
        error: error.message,
      });
    }
  }


  // const doSignup = async (req, res) => {
  //   try {
  //     const { name, email, password, address } = req.body;
  
  //     // Check if required fields are provided
  //     if (!password) {
  //       return res.status(400).json({
  //         data: [],
  //         message: "Error",
  //         error: "Password is required",
  //       });
  //     }
  
  //     // Hash the password asynchronously
  //     const hashedPassword = await bcrypt.hash(password, 10);
  
  //     // Create new user
  //     const newUser = new User({
  //       name,
  //       email,
  //       password: hashedPassword,
  //       address,
  //       createdAt: new Date(),
  //     });
  
  //     // Save user to the database
  //     const savedUser = await newUser.save();
  
  //     // Generate JWT token
  //     const token = jwt.sign({ id: savedUser._id, email: savedUser.email }, SECRET_KEY, { expiresIn: "7d" });
  
  //     // Respond with user data and token
  //     res.status(201).json({
  //       data: savedUser,
  //       token,
  //       message: "Signup successful",
  //     });
  //   } catch (error) {
  //     console.error("Signup Error:", error);
  //     res.status(500).json({
  //       data: [],
  //       message: "Error in Signup",
  //       error: error.message,
  //     });
  //   }
  // };
  








const doSignup =  async (req, res) => {
    try {
      if(!req?.body?.password){
        res.status(501).json({
          data: [],
          message: "Error",
          error: "Password is required",
        });
      }
      let hashedPassword = await bcrypt.hashSync(req?.body?.password, 10);
      let newUser = new User({
        name: req?.body?.name,
        email: req?.body?.email,
        password: hashedPassword,
        address: req?.body?.address,
        createdAt: new Date(),
      })
      let savedUser = await newUser.save();
      res.json({
        data: savedUser,
        message: "Success",
      });
    } catch (error) {
      res.json({
        data: [],
        message: "Error in Signup",
        error: error.message,
      });
    }
  }

module.exports = {
  doLogin,
  doSignup,
};

