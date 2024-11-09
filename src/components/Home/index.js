import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [rooms, setRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState("2022-02-01");
  const [checkOutDate, setCheckOutDate] = useState("2022-02-01");

  const navigate = useNavigate();

  const incrementRooms = () => setRooms((prev) => prev + 1);
  const decrementRooms = () => {
    if (rooms > 1) {
      setRooms((prev) => prev - 1);
    }
  };

  const handleBooking = () => {
    navigate("/booking-details", {
      state: { rooms, checkInDate, checkOutDate },
    });
  };

  return (
    <div className="cont">
      <div className="main-container">
        <Navbar />
        <div className="container">
          <div className="home-content">
            <p className="paragraph">
              Work from
              <br />
              Ladakh
            </p>
            <p className="text">India’s first true digital tourism ecosystem</p>

            {/* Icons positioned directly below the paragraph */}
            <div className="icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "30px" }}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "30px" }}
                />
              </a>
            </div>
          </div>

          <div className="ex2">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/0a/77/76/74/mountains-in-ladakh.jpg"
              alt="Ladakh mountains"
            />
          </div>
        </div>

        <div className="additional-content">
          <div className="div1">
            <h3>CHECK-IN</h3>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          <div className="div2">
            <h3>CHECK-OUT</h3>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
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

        <div className="book-button">
          <button onClick={handleBooking}>Book</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
