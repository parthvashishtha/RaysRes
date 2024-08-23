import React from "react";
import "./socialMediaHandles.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaHandles = () => {
  const socialMedia = [
    { icon: <FaFacebook />, link: "https://www.facebook.com" },
    { icon: <FaTwitter />, link: "https://www.twitter.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
  ];

  return (
    <div className="social-media-wrapper">
      <h2 className="social-media-heading">Follow us on Social Media</h2>
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
    </div>
  );
};

export default SocialMediaHandles;
