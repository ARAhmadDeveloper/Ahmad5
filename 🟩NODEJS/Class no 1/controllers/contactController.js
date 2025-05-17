const Contact = require("../models/contactModel");

// @desc    Submit Contact Form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ success: true, message: "Message Sent Successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error!" });
    }
};


const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find(); // Fetch all contacts
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching contacts", error });
    }
};


module.exports = { submitContactForm, getContacts };
