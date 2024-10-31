import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/react.svg';

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 lg:px-40 py-10 md:pb-20 bg-white text-lightPrimary">

      {/* Left Section - Logo and Description */}
      <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
        <div className="flex justify-center md:justify-start items-center mb-6">
          <img src={Logo} alt="Logo" className="h-10 mr-2" />
        </div>

        <p className="leading-7 tracking-wide max-w-xs md:max-w-sm mx-auto md:mx-0">
          Any business owner that is looking to increase their online sales or bring in more leads for their business.
        </p>
      </div>

      {/* Right Container - Links, Divider, and Copyright */}
      <div className="flex-shrink-0 flex flex-col items-center text-center md:text-left md:w-1/3  mx-auto mt-8 md:mt-0">
        
        {/* Links Section */}
        <div className="flex justify-between w-full md:text-left space-x-6 md:space-x-12">
          <div className="flex flex-col space-y-2">
            <Link to="/services" className="hover:text-accent">Services</Link>
            <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
            <Link to="/contact" className="hover:text-accent">Contact Us</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="https://instagram.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://facebook.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-lightSecondary my-6" />

        {/* Copyright Section */}
        <div>
          <p>© All Rights Quad.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
