import React, { useState } from 'react';
import welcomeImage from '../assets/icon1.gif';
import './Landing.css';

function Landing({ onStart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-page">
      {/* 🍔 Burger Menu */}
      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      {menuOpen && (
        <div className="dropdown-menu">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      <img src={welcomeImage} alt="Welcome" className="landing-image" />
      <h1>Welcome to My Stress Survey App!</h1>
      <p>
        I'm conducting a research on how to measure stress level of people by taking
        a simple survey.<br />
        Feel free to answer the questions truthfully for much accurate result.🌟<br /><br />
        Click below to find out how stressed you are 🧠
      </p>
      <button onClick={onStart}>🎯 Take the Survey</button>
    </div>
  );
}

export default Landing;
