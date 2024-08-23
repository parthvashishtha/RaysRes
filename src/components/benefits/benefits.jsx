import React from "react";
import styles from "./benefitsSection.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import sunImg from "./img_ben.png";
import { useLanguage } from "../../LanguageContext";
import "../../App.css";
import Animation from "./Animation.json";
import Lottie from "lottie-react";

const translations = {
  en: {
    benefitsHeading: "Benefits with us",
    benefits: [
      {
        heading: "Long-term Savings",
        content:
          "Invest in solar energy today and enjoy long-term savings! By choosing Syon Solar Panel Company💸📉",
        id: 1,
      },
      {
        heading: "Discounted Installation",
        content:
          "Enjoy a special discount on the installation of your solar panel system.💸📉",
        id: 2,
      },
      {
        heading: "Free Consultation",
        content:
          "Schedule a free consultation with us today to explore how solar energy can benefit you!📞",
        id: 3,
      },
      {
        heading: "24/7 Support",
        content:
          "Benefit from our round-the-clock support to ensure your solar system operates smoothly at all times.🕒",
        id: 4,
      },
    ],
  },
  hi: {
    benefitsHeading: "हमारे साथ लाभ",
    benefits: [
      {
        heading: "दीर्घकालिक बचत",
        content:
          "आज ही सौर ऊर्जा में निवेश करें और दीर्घकालिक बचत का आनंद लें! सियोन सोलर पैनल कंपनी को चुनकर💸📉",
        id: 1,
      },
      {
        heading: "छूट पर स्थापना",
        content:
          "अपने सौर पैनल प्रणाली की स्थापना पर विशेष छूट का आनंद लें।💸📉",
        id: 2,
      },
      {
        heading: "नि:शुल्क परामर्श",
        content:
          "सौर ऊर्जा आपके लिए कैसे लाभकारी हो सकती है, यह जानने के लिए आज ही नि:शुल्क परामर्श लें!📞",
        id: 3,
      },
      {
        heading: "24/7 समर्थन",
        content:
          "सुनिश्चित करने के लिए हमारी चौबीसों घंटे सहायता का लाभ उठाएं कि आपका सौर प्रणाली हमेशा सुचारू रूप से काम करता है।🕒",
        id: 4,
      },
    ],
  },
};

const BenefitsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const benefitVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: 0,
    }),
    visible: (i) => ({
      opacity: 1,
      x: i % 2 === 0 ? "-120%" : "120%",
      transition: {
        duration: 1,
      },
    }),
  };

  const style = {
    width: "500px",
    position: "absolute",
    margin: "25% 0 0 0",
  };

  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <span className={styles.heading}>
        {translations[language].benefitsHeading}
      </span>
      {/* <motion.img
        src={sunImg} 
        alt="Benefits illustration"
        className={styles.imgStyle}
        variants={imageVariants}
      /> */}
      <Lottie style={style} animationData={Animation} />

      {translations[language].benefits.map((benefit, index) => (
        <motion.div
          key={benefit.id}
          className={`${styles.benefit} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
          custom={index}
          variants={benefitVariants}
          whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.benefitText}>{benefit.heading}</span>
          <span className={styles.benefitSubText}>{benefit.content}</span>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default BenefitsSection;
