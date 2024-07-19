import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import SolarPanelAnimation from "../home_animation/home_animation";
import "./home_main_slidebar.css";

const images = [
  "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/600x300/3498DB/FFFFFF?text=Image+2",
  "https://via.placeholder.com/600x300/2ECC71/FFFFFF?text=Image+3",
  "https://via.placeholder.com/600x300/F39C12/FFFFFF?text=Image+4",
];

const SLIDE_INTERVAL = 3000; // 3 seconds

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentImage >= images.length) {
          setCurrentImage(0);
        } else if (currentImage < 0) {
          setCurrentImage(images.length - 1);
        }
      }, 500); // Duration of your transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentImage]);

  useEffect(() => {
    let slideInterval;
    if (autoSlide) {
      slideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
    }
    return () => clearInterval(slideInterval);
  });

  const nextSlide = () => {
    setCurrentImage((prev) => prev + 1);
    setIsTransitioning(true);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentImage((prev) => prev - 1);
    setIsTransitioning(true);
    resetAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
    setIsTransitioning(true);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), SLIDE_INTERVAL);
  };

  return (
    <Box className="slider-container">
      <Box className="slider-wrapper">
        <Box
          className={`slider-content ${isTransitioning ? "transitioning" : ""}`}
          style={{
            transform: `translateX(${-100 * (currentImage + 1)}%)`,
            width: `${(images.length + 2) * 100}%`,
          }}
        >
          <Box className="slide">
            <img
              src={images[images.length - 1]}
              alt={`Slide ${images.length}`}
            />
          </Box>
          {images.map((image, index) => (
            <Box key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </Box>
          ))}
          <Box className="slide">
            <img src={images[0]} alt={`Slide 1`} />
          </Box>
        </Box>
        <IconButton onClick={prevSlide} className="nav-button prev-button">
          <ChevronLeft sx={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton onClick={nextSlide} className="nav-button next-button">
          <ChevronRight sx={{ fontSize: "2rem" }} />
        </IconButton>
        <Box className="indicator-dots">
          {images.map((_, index) => (
            <Typography
              key={index}
              variant="body2"
              className={`indicator-dot ${
                index === currentImage ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Box>
      </Box>
      <SolarPanelAnimation />
    </Box>
  );
};

export default Slider;
