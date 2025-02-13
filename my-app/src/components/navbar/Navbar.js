import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>ARAhmad</h1>
      </div>
      <ul>
        <li>
          <Link className="toHome" to="/">Home</Link>
        </li>
        <li>
          <Link className="toAbout" to="/about">About</Link>
        </li>
        <li>
          <Link className="toContact" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

