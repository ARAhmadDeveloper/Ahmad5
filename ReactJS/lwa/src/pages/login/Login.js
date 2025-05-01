import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const handleDemoLogin = () => {
    // Add demo login logic here if needed
    navigate("/demo", { replace: true });
  };

  const handleContactAdmin = () => {
    window.location.href = "mailto:admin@example.com";
  };

  const handleJoinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/your-group-link", "_blank");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <input type="text" id="username" placeholder=" " required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-group">
          <input type="password" id="password" placeholder=" " required />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Login</button>
        <button type="button" className="demo-btn" onClick={handleDemoLogin}>
          Use Demo
        </button>
        <button type="button" className="alt-btn" onClick={handleContactAdmin}>
          Contact Admin
        </button>
        <button type="button" className="alt-btn" onClick={handleJoinWhatsApp}>
          WhatsApp Group
        </button>
      </form>
    </div>
  );
}
