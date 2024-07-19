import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import SolarPanelAnimation from "../home_animation/home_animation";

const images = [
  "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/600x300/3498DB/FFFFFF?text=Image+2",
  "https://via.placeholder.com/600x300/2ECC71/FFFFFF?text=Image+3",
  "https://via.placeholder.com/600x300/F39C12/FFFFFF?text=Image+4",
];

const SLIDE_INTERVAL = 3000; // 5 seconds

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
  }, [isTransitioning, currentImage, images.length]);

  useEffect(() => {
    let slideInterval;
    if (autoSlide) {
      slideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
    }
    return () => clearInterval(slideInterval);
  }, [autoSlide]);

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
    <Box sx={{ mt: -3, position: "relative", maxWidth: "1500px" }}>
      <Box
        sx={{
          position: "relative",
          height: "360px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            transform: `translateX(${-100 * (currentImage + 1)}%)`,
            width: `${(images.length + 2) * 100}%`, // Adjusted to accommodate cloned slides
          }}
        >
          <Box
            sx={{
              minWidth: "100%", // Clone of the last image
              height: "100%",
            }}
          >
            <img
              src={images[images.length - 1]}
              alt={`Slide ${images.length}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                height: "100%",
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
          <Box
            sx={{
              minWidth: "100%", // Clone of the first image
              height: "100%",
            }}
          >
            <img
              src={images[0]}
              alt={`Slide 1`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}
          size="large"
        >
          <ChevronLeft sx={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}
          size="large"
        >
          <ChevronRight sx={{ fontSize: "2rem" }} />
        </IconButton>
        {/* Indicator Dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {images.map((_, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: index === currentImage ? "#000" : "#ccc",
                mx: 1,
                cursor: "pointer",
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
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
