// BookingDetails.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitFormData } from "../../redux/bookingSlice";
import Navbar from "../Navbar";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AboutUs from "../AboutUs"; // Add navigation

const BookingDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add navigate for routing
  const [rooms, setRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState("01 Feb 2022");
  const [checkOutDate, setCheckOutDate] = useState("01 Feb 2022");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Assuming formData contains all the form values including checkInDate, checkOutDate, and rooms
    const bookingData = {
      ...formData, // formData holds all the form values
      checkInDate,
      checkOutDate,
      rooms,
    };

    // Storing the data in localStorage
    localStorage.setItem("bookingDetails", JSON.stringify(bookingData));

    // Redirect to the BookingSuccess page
    navigate("/booking-success");
  };

  const incrementRooms = () => setRooms((prev) => prev + 1);
  const decrementRooms = () => {
    if (rooms > 1) setRooms((prev) => prev - 1);
  };

  const dateOptions = [
    "01 Feb 2022",
    "02 Feb 2022",
    "03 Feb 2022",
    "04 Feb 2022",
    "05 Feb 2022",
  ];

  return (
    <div>
      <Navbar />

      <div className="order-form-container">
        <div className="row">
          <div>
            <label>NAME</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>{" "}
          <br />
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="row">
          <div className="phone-input">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+1">+1</option>
              <option value="+91">+91</option>
            </select>
            <label>PHNE NUMBER</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <label>ADULTS</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
          />
          <label>CHILDREN</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="booking-details">
        <div className="additional-content">
          <div className="div1">
            <h3>CHECK-IN</h3>
            <select
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            >
              {dateOptions.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <div className="div2">
            <h3>CHECK-OUT</h3>
            <select
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            >
              {dateOptions.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3>ROOMS</h3>
            <div className="div3">
              <button className="minus-button" onClick={decrementRooms}>
                -
              </button>
              <p>{rooms}</p>
              <button className="plus-button" onClick={incrementRooms}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="payment-row">
          <div className="button-group">
            <button onClick={handleSubmit}>₹ 12,430</button>
            <button onClick={handleSubmit}>→</button>
          </div>
        </div>
      </div>

      <div className="info-row">
        <AboutUs />
        <div>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Refunds</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
