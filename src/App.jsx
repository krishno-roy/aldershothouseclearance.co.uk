import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Define routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
