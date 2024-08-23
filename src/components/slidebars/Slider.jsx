import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Slider.css";
import slideone from "./slideone.jpg";
import slidetwo from "./slidetwo.jpg";
import slideThree from "./slideThree.jpg";
// import slidenew from "./slidenew.jpg";

const images = [
  {
    src: slideone,
    text: (
      <span>
        Light up <span className="text1">every village</span> with solar energy
      </span>
    ),
    button: "Get Quote",
  },
  {
    src: slidetwo,

    text: (
      <span>
        Affordable for <span className="text1">every budget</span>
        <div className="text">Your Solar , Your Roof, Our Responsibility</div>
      </span>
    ),
    button: "Get Quote",
  },
  {
    src: slideThree,
    text: (
      <span>
        Leading Solar Panel company dedicated to providing energy solutions
        <div className="text">
          specifically, in <span className="text1">rural areas</span>
        </div>
      </span>
    ),
    button: "Get Quote",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [interactionTimer, setInteractionTimer] = useState(null);
  const intervalRef = useRef(null);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const nextSlide = useCallback(() => {
    if (currentIndex < extendedImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, extendedImages.length]);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(extendedImages.length - 2);
    } else if (currentIndex === extendedImages.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
  };

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 6000);
  }, [nextSlide]);

  const handleInteraction = useCallback(() => {
    if (interactionTimer) {
      clearTimeout(interactionTimer);
    }

    resetTimer();

    const newTimer = setTimeout(() => {
      resetTimer();
    }, 10000);

    setInteractionTimer(newTimer);
  }, [interactionTimer, resetTimer]);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  }, [transitionEnabled]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (interactionTimer) {
        clearTimeout(interactionTimer);
      }
    };
  }, [resetTimer, interactionTimer]);

  return (
    <div
      className="slider"
      onMouseEnter={handleInteraction}
      onMouseLeave={resetTimer}
    >
      <div
        className="slider-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionEnabled ? "transform 0.5s" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div className="slide" key={index}>
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="slide-image"
            />
            <div className="slide-content">
              <h2 className="slide-text">{image.text}</h2>
              <button className="slide-button" onClick={handleInteraction}>
                {image.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="prev-button"
        onClick={() => {
          prevSlide();
          handleInteraction();
        }}
      >
        &lt;
      </button>
      <button
        className="next-button"
        onClick={() => {
          nextSlide();
          handleInteraction();
        }}
      >
        &gt;
      </button>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              index === (currentIndex - 1 + images.length) % images.length
                ? "active"
                : ""
            }`}
            onClick={() => {
              setCurrentIndex(index + 1);
              handleInteraction();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
