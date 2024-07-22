import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import animationHomeImg from "../home_animation/animation_home_img.png";
import "./home_animation.css";

const SolarPanelAnimation = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <Box className="animation-container">
      {animationStarted && (
        <>
          <img
            src={animationHomeImg}
            alt="Solar Panel Left"
            className="image-left"
          />
          <img
            src={animationHomeImg}
            alt="Solar Panel Right"
            className="image-right"
          />
          <div className="message-box">
            <Typography variant="h4" className="stylish-typography">
              Life is Better with <span className="highlight">SYON !!</span>
            </Typography>
          </div>
        </>
      )}
    </Box>
  );
};

export default SolarPanelAnimation;
