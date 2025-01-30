import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Logo from "../assets/manandvan.png";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white py-4 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex justify-between items-center">
        {/* Logo - Links to Home Page */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-lg font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-green-500 hover:scale-105 transition-transform"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-500 hover:scale-105 transition-transform"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 hover:scale-105 transition-transform"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Phone Icon */}
        <div className="hidden md:flex items-center gap-2 text-lg font-semibold">
          <div className="bg-green-500 p-3 rounded-md">
            <FaPhoneAlt className="text-white" />
          </div>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-green-500 p-2 rounded-md text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-200 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg p-6`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 mt-6 text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-gray-600" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Phone Contact */}
        <div className="flex items-center gap-2 mt-6 text-lg font-semibold">
          <div className="bg-green-500 p-3 rounded-md">
            <FaPhoneAlt className="text-white" />
          </div>
          <span>+8801738612417</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
