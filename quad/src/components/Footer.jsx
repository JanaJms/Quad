import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/react.svg';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className=" flex flex-col md:flex-row justify-around items-start px-40 pt-40 pb-20 mt-auto w-full">

      {/* Left Section - Logo and Description */}
      <div className="flex-1 mb-11 md:mb-0">
        <div className="flex items-center mb-12">
            <img 
            src={Logo}
            alt="Logo" 
            className="h-10 mr-2 "
            />
        </div>

        <p className="leading-7 tracking-wide text-left w-96 text-lightPrimary ">
            Any business owner that is looking to increase their online sales or bring in more leads for their business.
        </p>

      </div>

       {/* Right Container - Links, Divider, and Copyright */}
       <div className="flex-1 flex flex-col w-96 mt-auto items-start md:w-1/3">
        {/* Links Section */}
        <div className="flex justify-between w-80">
        <div className="flex flex-col space-y-2 items-start">
          <Link to="/services" className=" hover:text-accent">Services</Link>
          <Link to="/portfolio" className=" hover:text-accent">Portfolio</Link>
          <Link to="/contact" className=" hover:text-accent">Contact Us</Link>
        </div>
        <div className=" flex flex-col space-y-2 items-start">
          <a href="https://instagram.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://facebook.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-96 border-t text-lightSecondary my-4" />

      {/* Copyright Section*/}
      <div className="text-center md:text-left">
        <p className="text-gray-600">
          © All Rights Quad .
        </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
