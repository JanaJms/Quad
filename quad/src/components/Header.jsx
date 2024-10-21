import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from '../assets/react.svg';

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
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
        <Link to="/services" className="text-gray-700 hover:text-orange-500">Services</Link>
        <Link to="/portfolio" className="text-gray-700 hover:text-orange-500">Portfolio</Link>
        <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
      </div>

       {/* Let's Talk Button (Desktop) */}
       <div className="hidden md:flex">
        <a href="#" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Let’s Talk</a>
      </div>

    </nav>

  );
}

export default Header;
