import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from '../assets/react.svg';
import "../styles/Header.css";

function Header() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
      <img 
          src={ReactLogo}
          alt="Logo" 
          className="h-10 mr-2"
        />
      </div>

      {/* Menu Items (Desktop) */}
      <div className="hidden md:flex space-x-6 ml-auto">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/services" className="header-link">Services</Link>
        <Link to="/portfolio" className="header-link">Portfolio</Link>
        <Link to="/contact" className="header-link">Contact</Link>
      </div>

       {/* Let's Talk Button (Desktop) */}
       <div className="hidden md:flex ml-4">
        <a href="#" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Let’s Talk</a>
      </div>

    </nav>

  );
}

export default Header;
