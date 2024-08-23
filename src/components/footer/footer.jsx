import React, { useState } from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/newsletter", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("There was an error sending the email!", error);
      setMessage(error.response.data.message);
    }

    setEmail("");
  };

  const socialMedia = [
    { icon: <FaFacebook />, link: "https://www.facebook.com" },
    { icon: <FaTwitter />, link: "https://www.twitter.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="column-title">Our Motive</h3>
          <p className="column-text">
            We strive to innovate and inspire, creating solutions that make a
            difference in people's lives.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Services</h3>
          <ul className="service-list">
            <li className="service-item">S1</li>
            <li className="service-item">S2</li>
            <li className="service-item">S3</li>
            <li className="service-item">S4</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Contact Us</h3>
          <div className="contact-info">
            <p className="contact-item">Email: raysrooftop@gmail.com</p>
            <p className="contact-item">Phone: +91 9557827480</p>
            <p className="contact-item">
              Sheel Mohar Plaza C-Scheme Jaipur, Rajasthan, India
            </p>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="newsletter-button" type="submit">
              Subscribe
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>

        <div className="footer-column">
          <h3 className="column-title">Locations</h3>
          <ul className="location-list">
            <li className="location-item">Bikaner</li>
            <li className="location-item">Jaipur</li>
            <li className="location-item">Jodhpur</li>
            <li className="location-item">Ajmer</li>
          </ul>
        </div>
      </div>

      <div className="social-media-container">
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon"
          >
            {media.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
