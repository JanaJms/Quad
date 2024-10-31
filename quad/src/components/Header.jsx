import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/react.svg";
import "../styles/Header.css";
import ButtonLetsTalk from "./ButtonLetsTalk";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
];

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Function to dynamically set active and hover link styling
  const getLinkClass = (path) =>
    location.pathname === path ? "text-accent" : "text-primary hover:text-accent";

  // Close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-20 md:py-6 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 mr-2" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 ml-auto">
        {navLinks.map(({ path, label }) => (
          <Link key={path} to={path} className={getLinkClass(path)}>
            {label}
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <Link to="/contact">
        <div className="hidden md:flex ml-10">
          <ButtonLetsTalk>Let’s Talk</ButtonLetsTalk>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} // 'X' for open menu, horizontal lines for closed
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="list-none flex flex-col w-10/12 h-auto bg-white shadow-md z-40 p-4 mt-10 space-y-4 absolute right-6 top-20 rounded-xl ">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-4 py-2 ${getLinkClass(path)}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="block px-4 py-2 bg-black text-white rounded-md text-center" onClick={() => setIsOpen(false)}>
            Let’s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;