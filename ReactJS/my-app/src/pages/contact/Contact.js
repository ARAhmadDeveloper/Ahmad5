import React, { useState } from "react";
import "./contact.css"; // Import the CSS file
import Navbar from "../../components/navbar/Navbar";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); 
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("contactData ========>>>>>>>>", formData);

      const data = await response.json();
      if (data.success) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong!");
      }
      console.log("contactData ========>>>>>>>>", data);
    } catch (error) {
      console.error("Error:", error);
      alert("Server Error!");
    }
  };

  return (
    <div className="contact-container">
      <Navbar/>
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>
          Have any questions? Reach out to us and we'll get back to you soon!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
