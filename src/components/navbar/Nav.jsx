import React from 'react';
import './nav.css';
import { MdAddIcCall } from "react-icons/md";
import { useState } from 'react';
import logo from '../../assets/logo.webp'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="menu">
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}>
          Home
        </a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}>
          About
        </a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}>
          Contact
        </a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}>
          Portfolio
        </a>
      </div>
      <div className="cta">
        <div className="phone">
          <span>
            <MdAddIcCall />
            +91 8069859743
          </span>
        </div>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}>
          <button className="button primary">Get started</button>
        </a>
        <button className="button secondary">हिंदी?</button>
      </div>
    </nav>
  );
}

export default Nav;
