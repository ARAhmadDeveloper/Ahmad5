const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const { getContacts } = require("../controllers/contactController");

// Use the correct middleware function
router.post("/", contactController.submitContactForm);

router.get("/", getContacts);


module.exports = router; // ✅ Ensure this is `router`, NOT an object

