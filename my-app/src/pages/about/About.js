import React from "react";
import "./about.css"; // Import the CSS file

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">Welcome to iPhone Hub</h1>
        <p className="about-tagline">
          Your Ultimate Destination for Buying iPhones
        </p>
        <div className="about-content">
          <p>
            At <strong>iPhone Hub</strong>, we bring you the **best deals on all
            iPhone models**, from the legendary **iPhone 5** to the latest
            **iPhone 16**. Whether you're looking for an **affordable upgrade**
            or the **newest technology**, we've got you covered!
          </p>

          <p>
            Our mission is simple: **deliver premium Apple products at
            unbeatable prices**. With a wide selection of colors, storage
            capacities, and specifications, we help you find the perfect iPhone
            that fits your style and needs.
          </p>

          <p>
            Why choose us?
            <ul>
              <li>🚀 **Authentic & Certified iPhones**</li>
              <li>💰 **Best Prices & Exclusive Discounts**</li>
              <li>📦 **Fast & Secure Shipping**</li>
              <li>💬 **24/7 Customer Support**</li>
            </ul>
          </p>

          <p className="about-footer">
            Join thousands of satisfied customers and experience the **iPhone
            Hub difference today!**
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
