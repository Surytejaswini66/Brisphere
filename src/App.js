import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import BookingDetails from "./components/BookingDetails";
import BookingSuccess from "./components/BookingSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
