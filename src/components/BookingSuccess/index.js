import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./index.css";
import AboutUs from "../AboutUs";

const BookingSuccess = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBookingDetails = localStorage.getItem("bookingDetails");
      if (storedBookingDetails) {
        setBookingDetails(JSON.parse(storedBookingDetails));
      }
    }
  }, []);

  if (!bookingDetails) {
    return <p>No booking details found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="booking-success-container">
        <div className="details-left">
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
          <div className="image-and-info-row">
            <div className="image-container">
              <img
                src="https://t3.ftcdn.net/jpg/07/98/75/42/360_F_798754273_6DE20CVrtJthbA8u73V9MQQ9kKOSF6jV.jpg"
                alt="Payment Info"
              />
            </div>
            <div className="info">
              <h3>Booking Success</h3>
              <p>Your payment has been confirmed successfully.</p>
              <p>Your booking ID is {bookingDetails.bookingId}</p>
            </div>
          </div>

          <div className="order-summary">
            <h3>Summary</h3>
            <p>{bookingDetails.roomType}</p>
            <p>₹ {bookingDetails.totalPrice}</p>
          </div>
        </div>
      </div>

      <div className="footer">
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

export default BookingSuccess;
