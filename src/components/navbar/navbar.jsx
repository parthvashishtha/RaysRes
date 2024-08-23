import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import "./navbar.css";

const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact Us",
    signup: "Sign Up for Free Electricity",
  },
  hi: {
    home: "होम",
    about: "विषय",
    contact: "संपर्क करें",
    signup: "नि:शुल्क बिजली के लिए साइन अप करें",
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);
  const { language, toggleLanguage } = useLanguage();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setActiveLink(path);
  };

  return (
    <div className={`navbar ${isNavVisible ? "" : "navbar-hidden"}`}>
      <Link to="/" className="navbar-logo">
        SYON
      </Link>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <button
          onClick={() => handleNavigate("/")}
          className={`navbar-link ${activeLink === "/" ? "active" : ""}`}
        >
          {translations[language].home}
        </button>
        <button
          onClick={() => handleNavigate("/about")}
          className={`navbar-link ${activeLink === "/about" ? "active" : ""}`}
        >
          {translations[language].about}
        </button>
        <button
          onClick={() => handleNavigate("/contact")}
          className={`navbar-link ${activeLink === "/contact" ? "active" : ""}`}
        >
          {translations[language].contact}
        </button>
        <button
          onClick={() => handleNavigate("/contact")}
          className={`navbar-signup ${
            activeLink === "/contact" ? "active" : ""
          }`}
        >
          {translations[language].signup}
        </button>
      </div>
      <button className="language-toggle" onClick={toggleLanguage}>
        {language === "en" ? "हिंदी" : "English"}
      </button>
      <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="navbar-toggle-icon">☰</span>
      </div>
    </div>
  );
};

export default Navbar;
