import React, { useState, useEffect } from "react";
import "./advertisement.css";
import ad1 from "./Ad1.jpg";
import ad2 from "./Ad2.jpg";

const Advertisement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advertisements = [
    {
      id: 1,
      image: ad1,
    },
    {
      id: 2,
      image: ad2,
    },
    {
      id: 3,
      image: ad2,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % advertisements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [advertisements.length]);

  return (
    <div className="advertisement-wrapper">
      {/* <h2 className="advertisement-container-header">Ad Section</h2> */}
      <div className="advertisement-container">
        {advertisements.map((ad, index) => (
          <div
            key={ad.id}
            className={`ad-card ${index === currentIndex ? "active" : ""}`}
          >
            <img src={ad.image} alt={ad.title} />
            <div className="ad-content">
              <h3>{ad.title}</h3>
              {/* <p>{ad.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
