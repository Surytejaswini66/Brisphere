// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Optional: Add custom CSS if needed for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">Brisphere</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
