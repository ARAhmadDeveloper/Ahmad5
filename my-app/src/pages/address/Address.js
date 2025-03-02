import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCartAfterFormSubmission } from "../../store/slices/cartSlice";
import "./address.css";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "../../store/slices/addressSlice";

const DeliveryForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carted = useSelector((store) => store.cartProduct.cartItems) || []; // Ensure default to []
  console.log("carted ========>>>>>>>>>>________++_+_+_+", carted);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !mobile || !email || !address || !city || !postalCode) return;

    setSubmitted(true);
    dispatch(clearCartAfterFormSubmission("clearCart"));
    
    const data = {
      name,
      mobile,
      email,
      address,
      city,
      postalCode,
    };
    e.preventDefault();
    dispatch(saveAddress(data)); // ✅ Save to Redux store
    alert("Address saved successfully!");
    console.log("data=-=-=-,=-,=-.,-.,=-.,=-=<><><", data);

    setName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setCity("");
    setPostalCode("");

    // Smoothly redirect to home after 2 seconds
    // setTimeout(() => {
    //   navigate("/");
    // }, 2000);
  };
  // console.log("Address =-=-=-=-=-=-=-s'ld';'", handleSubmit);
  return (
    <div className="form-container">
      {!submitted ? (
        <div className="form-card">
          <h2>Parcel Delivery Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Contact Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            {/* postal code */}
            <input
              type="number"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              disabled={submitted}
              pattern="[0-9]{5}"
              title="Please enter a 5-digit postal code."
            />

            <button type="submit" className="submit-btn">
              Order Now
            </button>
          </form>
        </div>
      ) : (
        <div className="thank-you-message">
          <h2>🎉 Thank You for Purchasing! 🎉</h2>
          <p>Your order has been placed successfully.</p>
          <button onClick={() => navigate("/home")} className="homeBtn">Home</button>
          <button onClick={() => navigate("/orders")} className="ordersBtn" >Orders</button>
        </div>
      )}
    </div>
  );
};

export default DeliveryForm;
