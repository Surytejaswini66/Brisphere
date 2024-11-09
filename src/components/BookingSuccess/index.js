import React from "react";
import Navbar from "../Navbar"; // Import Navbar component
import "./index.css"; // Import the CSS file for styling
import AboutUs from "../AboutUs";

const BookingSuccess = () => {
  // Retrieve the form data stored in localStorage from BookingDetails
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

  // Check if booking details are available
  if (!bookingDetails) {
    return <p>No booking details found.</p>;
  }

  return (
    <div>
      <Navbar /> {/* Navbar is displayed at the top */}
      <div className="booking-success-container">
        <div className="details-left">
          {/* Display booking details in a column */}
          <div className="details-row">
            <h3>Name:</h3>
            <p>{bookingDetails.name}</p>
          </div>
          <div className="details-row">
            <h3>Email:</h3>
            <p>{bookingDetails.email}</p>
          </div>
          <div className="details-row">
            <h3>Phone Number:</h3>
            <p>
              {bookingDetails.countryCode} {bookingDetails.phoneNumber}
            </p>
          </div>
          <div className="details-row">
            <h3>Address Line 1:</h3>
            <p>{bookingDetails.addressLine1}</p>
          </div>
          <div className="details-row">
            <h3>Address Line 2:</h3>
            <p>{bookingDetails.addressLine2}</p>
          </div>
        </div>

        <div className="details-right">
          {/* Image and additional info in a row */}
          <div className="image-and-info-row">
            <div className="image-container">
              <img
                src="https://t3.ftcdn.net/jpg/07/98/75/00/360_F_798750071_76JJz1fPbpuMVxIro8xtSdQ1JWkFKWmv.jpg"
                alt="Booking Image"
              />
            </div>
            <div className="additional-info">
              <h1>Order Complete</h1>
              <p>Have questions?</p>
              <a alt="contact-us" href="https://leh.nic.in/contact-us/">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Details Section - Items in a row */}
      <div className="booking-details">
        <div className="booking-row">
          <div>
            <h3>CHECK-IN</h3>
            <p>{bookingDetails.checkInDate}</p>
          </div>
          <div>
            <h3>CHECK-OUT</h3>
            <p>{bookingDetails.checkOutDate}</p>
          </div>
          <div>
            <h3>ROOMS</h3>
            <p>{bookingDetails.rooms}</p>
          </div>
        </div>

        {/* Adding previous amount and a button */}
        <div className="payment-row">
          <button>₹ 12,430</button>
          <button>← Previous Amount</button>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default BookingSuccess;
