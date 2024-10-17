import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default Header;
