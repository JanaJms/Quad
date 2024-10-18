import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router';

function App() {
  return (
    <Router>
      <Header />
      <AppRouter/>
      <Footer />
    </Router>
  );
}

export default App;