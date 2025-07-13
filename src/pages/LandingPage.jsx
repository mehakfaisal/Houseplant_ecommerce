import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Green Haven</h1>
      <p>Your one-stop shop for beautiful and healthy houseplants!</p>
      <Link to="/products" className="start-button">Get Started</Link>
    </div>
  );
};

export default LandingPage;