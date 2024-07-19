// import React, { useState } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const images = [
//   "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
//   "https://via.placeholder.com/600x300/3498DB/FFFFFF?text=Image+2",
//   "https://via.placeholder.com/600x300/2ECC71/FFFFFF?text=Image+3",
//   "https://via.placeholder.com/600x300/F39C12/FFFFFF?text=Image+4",
// ];

// const Slider = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextSlide = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <Box sx={{ mt: 4, position: "relative" }}>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "300px",
//           overflow: "hidden",
//           position: "relative",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <img
//           src={images[currentImage]}
//           alt={`Slide ${currentImage + 1}`}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             transition: "transform 0.5s ease-in-out",
//           }}
//         />
//         <IconButton
//           onClick={prevSlide}
//           sx={{
//             position: "absolute",
//             left: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//           }}
//         >
//           <ChevronLeft />
//         </IconButton>
//         <IconButton
//           onClick={nextSlide}
//           sx={{
//             position: "absolute",
//             right: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//           }}
//         >
//           <ChevronRight />
//         </IconButton>
//       </Box>
//       <Box sx={{ textAlign: "center", mt: 2 }}>
//         {images.map((_, index) => (
//           <Typography
//             key={index}
//             variant="body2"
//             sx={{
//               display: "inline-block",
//               width: "8px",
//               height: "8px",
//               borderRadius: "50%",
//               backgroundColor: index === currentImage ? "#000" : "#ccc",
//               mx: 1,
//               cursor: "pointer",
//             }}
//             onClick={() => setCurrentImage(index)}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Slider;

// import React, { useState } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const images = [
//   "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
//   "https://via.placeholder.com/600x300/3498DB/FFFFFF?text=Image+2",
//   "https://via.placeholder.com/600x300/2ECC71/FFFFFF?text=Image+3",
//   "https://via.placeholder.com/600x300/F39C12/FFFFFF?text=Image+4",
// ];

// const Slider = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextSlide = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <Box sx={{ mt: -3, position: "relative" }}>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "350px",
//           overflow: "hidden",
//           position: "relative",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <img
//           src={images[currentImage]}
//           alt={`Slide ${currentImage + 1}`}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             transition: "transform 0.5s ease-in-out",
//           }}
//         />
//         <IconButton
//           onClick={prevSlide}
//           sx={{
//             position: "absolute",
//             left: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": {
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//             },
//           }}
//           size="large"
//         >
//           <ChevronLeft sx={{ fontSize: "2rem" }} />
//         </IconButton>
//         <IconButton
//           onClick={nextSlide}
//           sx={{
//             position: "absolute",
//             right: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": {
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//             },
//           }}
//           size="large"
//         >
//           <ChevronRight sx={{ fontSize: "2rem" }} />
//         </IconButton>
//       </Box>
//       <Box sx={{ textAlign: "center", mt: 2 }}>
//         {images.map((_, index) => (
//           <Typography
//             key={index}
//             variant="body2"
//             sx={{
//               display: "inline-block",

//               width: "8px",
//               height: "8px",
//               mt: 0,
//               borderRadius: "50%",
//               backgroundColor: index === currentImage ? "#000" : "#ccc",
//               mx: 1,
//               cursor: "pointer",
//               transition: "background-color 0.3s ease-in-out",
//               "&:hover": {
//                 backgroundColor: "#000",
//               },
//             }}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Slider;

// import React, { useState } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const images = [
//   "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
//   "https://via.placeholder.com/600x300/3498DB/FFFFFF?text=Image+2",
//   "https://via.placeholder.com/600x300/2ECC71/FFFFFF?text=Image+3",
//   "https://via.placeholder.com/600x300/F39C12/FFFFFF?text=Image+4",
// ];

// const Slider = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextSlide = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <Box
//       sx={{ mt: 4, position: "relative", maxWidth: "1400px", margin: "0 auto" }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           height: "300px",
//           overflow: "hidden",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100%",
//             width: "100%",
//             transition: "transform 0.5s ease-in-out",
//             transform: `translateX(${-100 * currentImage}%)`,
//           }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${index + 1}`}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           ))}
//         </Box>
//         <IconButton
//           onClick={prevSlide}
//           sx={{
//             position: "absolute",
//             left: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": {
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//             },
//           }}
//           size="large"
//         >
//           <ChevronLeft sx={{ fontSize: "2rem" }} />
//         </IconButton>
//         <IconButton
//           onClick={nextSlide}
//           sx={{
//             position: "absolute",
//             right: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": {
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//             },
//           }}
//           size="large"
//         >
//           <ChevronRight sx={{ fontSize: "2rem" }} />
//         </IconButton>
//         {/* Indicator Dots */}
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: "10px", // Adjust this value to position dots higher or lower
//             left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           {images.map((_, index) => (
//             <Typography
//               key={index}
//               variant="body2"
//               sx={{
//                 display: "inline-block",
//                 width: "12px",
//                 height: "12px",
//                 borderRadius: "50%",
//                 backgroundColor: index === currentImage ? "#000" : "#ccc",
//                 mx: 1,
//                 cursor: "pointer",
//                 transition: "background-color 0.3s ease-in-out",
//                 "&:hover": {
//                   backgroundColor: "#000",
//                 },
//               }}
//               onClick={() => goToSlide(index)}
//             />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Slider;

// import React, { useState } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const images = [
//   "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
//   "https://via.placeholder.com/600x300/3498DB/FFFFFF?text=Image+2",
//   "https://via.placeholder.com/600x300/2ECC71/FFFFFF?text=Image+3",
//   "https://via.placeholder.com/600x300/F39C12/FFFFFF?text=Image+4",
// ];

// const Slider = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextSlide = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <Box
//       sx={{
//         mt: -3,
//         position: "relative",
//         maxWidth: "1500px",
//         // margin: "0 auto",
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           height: "30px",
//           overflow: "hidden",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             transition: "transform 0.5s ease-in-out",
//             transform: `translateX(${-100 * currentImage}%)`,
//             width: `${images.length * 100}%`, // Ensure the flex container's width covers all slides
//           }}
//         >
//           {images.map((image, index) => (
//             <Box
//               key={index}
//               sx={{
//                 minWidth: "100%", // Each image takes up 100% of the slider container
//                 height: "100%",
//               }}
//             >
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </Box>
//           ))}
//         </Box>
//         <IconButton
//           onClick={prevSlide}
//           sx={{
//             position: "absolute",
//             left: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": {
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//             },
//           }}
//           size="large"
//         >
//           <ChevronLeft sx={{ fontSize: "2rem" }} />
//         </IconButton>
//         <IconButton
//           onClick={nextSlide}
//           sx={{
//             position: "absolute",
//             right: "8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": {
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//             },
//           }}
//           size="large"
//         >
//           <ChevronRight sx={{ fontSize: "2rem" }} />
//         </IconButton>
//         {/* Indicator Dots */}
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: "10px", // Adjust this value to position dots higher or lower
//             left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           {images.map((_, index) => (
//             <Typography
//               key={index}
//               variant="body2"
//               sx={{
//                 display: "inline-block",
//                 width: "12px",
//                 height: "12px",
//                 borderRadius: "50%",
//                 backgroundColor: index === currentImage ? "#000" : "#ccc",
//                 mx: 1,
//                 cursor: "pointer",
//                 transition: "background-color 0.3s ease-in-out",
//                 "&:hover": {
//                   backgroundColor: "#000",
//                 },
//               }}
//               onClick={() => goToSlide(index)}
//             />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Slider;

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

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentImage === images.length) {
          setCurrentImage(0);
        } else if (currentImage === -1) {
          setCurrentImage(images.length - 1);
        }
      }, 500); // Duration of your transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentImage]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length ? 1 : prev + 1));
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === -1 ? images.length - 2 : prev - 1));
    setIsTransitioning(true);
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
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

// Import the new component

// import React, { useState, useEffect } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import SolarPanelAnimation from "../home_animation/home_animation"; // Import the new component

// const images = [
//   "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
//   "https://via.placeholder.com/600x300/3498DB/FFFFFF?text=Image+2",
//   "https://via.placeholder.com/600x300/2ECC71/FFFFFF?text=Image+3",
//   "https://via.placeholder.com/600x300/F39C12/FFFFFF?text=Image+4",
// ];

// const Slider = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     if (isTransitioning) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(false);
//         if (currentImage === images.length) {
//           setCurrentImage(0);
//         } else if (currentImage === -1) {
//           setCurrentImage(images.length - 1);
//         }
//       }, 500); // Duration of your transition
//       return () => clearTimeout(timer);
//     }
//   }, [isTransitioning, currentImage]);

//   const nextSlide = () => {
//     setCurrentImage((prev) => (prev === images.length ? 1 : prev + 1));
//     setIsTransitioning(true);
//   };

//   const prevSlide = () => {
//     setCurrentImage((prev) => (prev === -1 ? images.length - 2 : prev - 1));
//     setIsTransitioning(true);
//   };

//   const goToSlide = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <Box
//       sx={{
//         mt: -3,
//         position: "relative",
//         maxWidth: "1500px",
//         margin: "0 auto",
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           height: "330px",
//           overflow: "hidden",
//         }}
//       >
//         {images.map((image, index) => (
//           <Box
//             key={index}
//             component="img"
//             src={image}
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: `${(index - currentImage) * 100}%`,
//               width: "100%",
//               height: "100%",
//               transition: "left 0.5s ease-in-out",
//             }}
//           />
//         ))}
//         <IconButton
//           onClick={prevSlide}
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "10px",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
//           }}
//         >
//           <ChevronLeft />
//         </IconButton>
//         <IconButton
//           onClick={nextSlide}
//           sx={{
//             position: "absolute",
//             top: "50%",
//             right: "10px",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
//           }}
//         >
//           <ChevronRight />
//         </IconButton>
//       </Box>
//       <Box sx={{ textAlign: "center", mt: 2 }}>
//         {images.map((_, index) => (
//           <Typography
//             key={index}
//             variant="body2"
//             sx={{
//               display: "inline-block",
//               width: "8px",
//               height: "8px",
//               mt: 0,
//               borderRadius: "50%",
//               backgroundColor: index === currentImage ? "#000" : "#ccc",
//               mx: 1,
//               cursor: "pointer",
//               transition: "background-color 0.3s ease-in-out",
//               "&:hover": {
//                 backgroundColor: "#000",
//               },
//             }}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </Box>
//       <SolarPanelAnimation />
//     </Box>
//   );
// };

// export default Slider;
