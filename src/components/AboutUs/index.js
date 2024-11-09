// src/components/AboutUs.js
import React from "react";
import "./index.css";

function AboutUs() {
  return (
    <div className="container">
      <div className="about-us">
        <h2 className="company-name">Brisphere</h2>
        <p className="address">
          Spituk, Ladakh,
          <br />
          India, 194101
        </p>
        <p className="phone">+91 - 7764997033</p>
        <p className="email">amit.jha6700@gmail.com</p>
        <button>Location</button>
      </div>
    </div>
  );
}

export default AboutUs;
