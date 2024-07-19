import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import animationHomeImg from "../images/animation_home_img.png";

const moveAndRotateLeft = keyframes`
  0% {
    left: 30%;
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    left: 0;
    transform: translateY(-50%) rotate(-10deg);
  }
`;

const moveAndRotateRight = keyframes`
  0% {
    right: 30%;
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    right: 0;
    transform: translateY(-50%) rotate(10deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MessageBox = styled(Box)`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px 25px;
  border-radius: 5px;
  animation: ${fadeIn} 3s forwards;
  opacity: 0;
  width: 60%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StylishTypography = styled(Typography)`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: linear-gradient(45deg, #2196f3, #21cbf3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageLeft = styled("img")`
  position: absolute;
  top: 30%;
  left: 20%;
  width: 150px;
  height: auto;
  animation: ${moveAndRotateLeft} 3s forwards;
`;

const ImageRight = styled("img")`
  position: absolute;
  top: 30%;
  right: 20%;
  width: 150px;
  height: auto;
  animation: ${moveAndRotateRight} 3s forwards;
`;

const SolarPanelAnimation = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <Box
      sx={{ position: "relative", height: "200px", mt: 2, overflow: "hidden" }}
    >
      {animationStarted && (
        <>
          <ImageLeft src={animationHomeImg} alt="Solar Panel Left" />
          <ImageRight src={animationHomeImg} alt="Solar Panel Right" />
          <MessageBox>
            <StylishTypography variant="h4">
              Syon Hai To Sukoon Hai
            </StylishTypography>
          </MessageBox>
        </>
      )}
    </Box>
  );
};

export default SolarPanelAnimation;
