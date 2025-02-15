import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1  className="h1" ><Link to="/" className="h1" >ARAhmad</Link></h1>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="cart-link">
            <Link to="/cartedProducts" onClick={() => setIsOpen(false)}>
              Cart <span className="cart-badge">2</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
