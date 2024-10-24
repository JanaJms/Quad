import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/react.svg';
import "../styles/Header.css";
import ButtonLetsTalk from './ButtonLetsTalk';

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
    <nav className="flex items-center justify-between px-20 py-14">

      {/* Logo */}
      <div className="flex items-center">
      <img 
          src={Logo}
          alt="Logo" 
          className="h-10 mr-2 "
        />
      </div>

      {/* Menu Items (Desktop) */}
      <div className="hidden md:flex space-x-6 ml-auto">

        {/* Define an array of links with their respective paths */}
        {[
          { path: '/', label: 'Home' },
          { path: '/services', label: 'Services' },
          { path: '/portfolio', label: 'Portfolio' },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={` ${getLinkClass(path)}`}
          >
            {label}
          </Link>
        ))}
      </div>

       {/* Let's Talk Button (Desktop) */}
       <Link to="/contact">
        <div className="hidden md:flex ml-10">
          <ButtonLetsTalk>Let's Talk</ButtonLetsTalk>
        </div>
      </Link>

    </nav>

  );
}

export default Header;
