import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0 && !hasAnimated) {
      controls.start({ opacity: 1, y: 0 });
      setHasAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated, controls]);

  return (
    <motion.section
      ref={sectionRef}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ opacity: 1 }} // Ensure opacity stays 1 after animation
    >
      {children}
    </motion.section>
  );
};

export default ScrollAnimation;
