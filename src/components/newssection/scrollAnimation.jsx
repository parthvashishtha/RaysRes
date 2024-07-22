// ScrollAnimation.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <motion.section
      ref={sectionRef}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollAnimation;
