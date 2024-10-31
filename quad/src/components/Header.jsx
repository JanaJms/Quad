// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Logo from '../assets/react.svg';
// import "../styles/Header.css";
// import ButtonLetsTalk from './ButtonLetsTalk';

// function Header() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const getLinkClass = (path) => {
//     return location.pathname === path
//       ? 'text-accent'
//       : 'text-primary hover:text-accent';
//   };

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 md:px-20 md:py-6 relative">
//       <div className="flex items-center">
//         <img src={Logo} alt="Logo" className="h-10 mr-2" />
//       </div>

//       <div className="hidden md:flex space-x-6 ml-auto">
//         {[
//           { path: '/', label: 'Home' },
//           { path: '/services', label: 'Services' },
//           { path: '/portfolio', label: 'Portfolio' },
//         ].map(({ path, label }) => (
//           <Link key={path} to={path} className={getLinkClass(path)}>
//             {label}
//           </Link>
//         ))}
//       </div>

//       <Link to="/contact">
//         <div className="hidden md:flex ml-10">
//           <ButtonLetsTalk>Let's Talk</ButtonLetsTalk>
//         </div>
//       </Link>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} // 'X' for open menu, horizontal lines for closed
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="list-none flex justify-end items-start flex-1 flex-col bg-white shadow-md h-1/2 z-40 p-4 mt-10 space-y-4">
//           <Link to="/" className={`block px-4 py-2 ${getLinkClass('/')}`} onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/services" className={`block px-4 py-2 ${getLinkClass('/services')}`} onClick={() => setIsOpen(false)}>Services</Link>
//           <Link to="/portfolio" className={`block px-4 py-2 ${getLinkClass('/portfolio')}`} onClick={() => setIsOpen(false)}>Portfolio</Link>
//           <Link to="/contact" className="block px-4 py-2 bg-black text-white rounded-md text-center" onClick={() => setIsOpen(false)}>Let’s Talk</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/react.svg";
import "../styles/Header.css";
import ButtonLetsTalk from "./ButtonLetsTalk";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (path) =>
    location.pathname === path ? "text-accent" : "text-primary hover:text-accent";

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

export default Navbar;