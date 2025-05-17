import React from "react";
import "./demo.css";

export default function Demo() {
  return (
    <div
      className="portal"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <div className="logo-container">
        <img src={require("../../assets/logo.png")} className="logo"/>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <div className="banner warning">This is a demo Page</div>
        <div className="banner info">Buy login to access all features</div>
      </div>
      <h1 className="title">LWA Portal</h1>

      <div className="button-grid">
        {[
          "Gallery Hack",
          "Yt Subs Software",
          "WA Sender",
          "WhatsApp Hack",
          "Carding Method",
          "Instagram Hack",
          "Virus Maker",
          "Easypaisa Screenshot",
          "Nadra DB",
          "Fake Text Message",
          "₹ Pay Screenshot",
          "₹ Pay Screenshot",
          "WhatsApp Unban",
          "WhatsApp Unban",
          "WhatsApp Unban",
          "WhatsApp Unban",
          "Fake Caller",
        ].map((label, index) => (
          <button
            key={index}
            // className={`portal-btn ${label === "Nadra DB" ? "gray-btn" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="cta-container">
        <button className="cta-btn orange">Join WhatsApp Official Group</button>
        <button className="cta-btn orange">
          Need Help? Contact on WhatsApp
        </button>
      </div>

      <footer className="footer">
        Join LWA Portal to get all Tools 😉...! 🖤👑
      </footer>
    </div>
  );
}
