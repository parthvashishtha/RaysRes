import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <footer className="footer-wrapper">
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
          <li className="service-item">Web Development</li>
          <li className="service-item">Mobile Apps</li>
          <li className="service-item">UI/UX Design</li>
          <li className="service-item">Cloud Solutions</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="column-title">Contact Us</h3>
        <div className="contact-info">
          <p className="contact-item">Email: info@example.com</p>
          <p className="contact-item">Phone: +1 (123) 456-7890</p>
          <p className="contact-item">
            Address: 123 Tech Street, Silicon Valley, CA
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
      </div>

      <div className="footer-column">
        <h3 className="column-title">Locations</h3>
        <ul className="location-list">
          <li className="location-item">New York</li>
          <li className="location-item">London</li>
          <li className="location-item">Tokyo</li>
          <li className="location-item">Sydney</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
