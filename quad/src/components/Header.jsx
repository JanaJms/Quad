import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactLogo from '../assets/react.svg';
import "../styles/Header.css";

function Header() {

  const location = useLocation(); // Get the current path

  // Define a function to determine the className (text color) for each link
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? 'text-accent' 
      : 'text-primary hover:text-accent';
  };
  return (
    // Navbar
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

        {/* Define an array of links with their respective paths */}
        {[
          { path: '/', label: 'Home' },
          { path: '/services', label: 'Services' },
          { path: '/portfolio', label: 'Portfolio' },
          { path: '/contact', label: 'Contact' },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`font-medium ${getLinkClass(path)}`}
          >
            {label}
          </Link>
        ))}
      </div>

       {/* Let's Talk Button (Desktop) */}
       <div className="hidden md:flex ml-4">
        <a href="#" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Let’s Talk</a>
      </div>

    </nav>

  );
}

export default Header;
