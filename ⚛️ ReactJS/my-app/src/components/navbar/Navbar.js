import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NewPost from "../newPost/NewPost";
import LogoutButton from "../logoutButton/LogoutButton";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">AR Ahmad</div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} className="icon animate-spin-once" /> : <Menu size={28} className="icon animate-pulse" />}
        </button>

        {/* Combined Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home", "Contact"].map((name, index) => (
            <li key={name} style={{ transitionDelay: `${index * 0.1}s` }}>
              <Link
                to={`/${name.toLowerCase()}`}
                className="nav-item"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
          <li style={{ transitionDelay: `${0.2}s` }}>
            <NewPost />
          </li>
          <li style={{ transitionDelay: `${0.3}s` }}>
            <LogoutButton />
          </li>
        </ul>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%);
          backdrop-filter: blur(12px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          z-index: 50;
          padding: .5rem 1rem;
          border-bottom: 1px solid rgba(103, 230, 220, 0.2);
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 60px;
        }

        .logo {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(90deg, #67e6dc, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.1) rotate(2deg);
          opacity: 0.9;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #fff;
          z-index: 60;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .menu-toggle:hover {
          background: rgba(103, 230, 220, 0.2);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          align-items: center;
        }

        .nav-item {
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          color: #e2e8f0;
          padding: 0.6rem 1rem;
          position: relative;
          transition: color 0.3s ease, transform 0.3s ease;
          border-radius: 6px;
        }

        .nav-item:hover {
          color: #67e6dc;
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(103, 230, 220, 0.3);
        }

        .nav-item::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #67e6dc, #a5b4fc);
          transition: all 0.4s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover::after {
          width: 80%;
        }

        .icon {
          color: #e2e8f0;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .icon:hover {
          color: #67e6dc;
        }

        @keyframes spin-once {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-once {
          animation: spin-once 0.4s ease-in-out;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (max-width: 1024px) {
          .menu-toggle {
            display: block;
            position: absolute;
            right: 1.5rem;
            top: 50%;
            transform: translateY(-50%);
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
            flex-direction: column;
            padding: 1.5rem 0;
            border-bottom: 1px solid rgba(103, 230, 220, 0.2);
            transition: all 0.4s ease-in-out;
            opacity: 0;
            transform: translateY(-20px);
            display: none;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
          }

          .nav-links.open {
            display: flex;
            opacity: 1;
            transform: translateY(0);
          }

          .nav-links li {
            width: 100%;
            opacity: 0;
            transform: translateX(-20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          .nav-links.open li {
            opacity: 1;
            transform: translateX(0);
          }

          .nav-item {
            padding: 1rem;
            width: 100%;
            text-align: center;
            font-size: 1.25rem;
            border-radius: 0;
          }

          .nav-links li > * {
            width: 100%;
            text-align: center;
          }

          .logo {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;