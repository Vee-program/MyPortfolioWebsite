import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import ServicesRequest from "./Pages/ServicesRequest";
import FeedbackRating from "./Pages/FeedbackRating";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicesrequest" element={<ServicesRequest />} />
        <Route path="/feedbackrating" element={<FeedbackRating />} />
      </Routes>
    </div>
  );
};

export default App;
