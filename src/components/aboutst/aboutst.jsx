import React from "react";
import { motion } from "framer-motion";
import "./aboutst.css";
import homeImg from "./homeimg.png";
import { useLanguage } from "../../LanguageContext";

const translations = {
  en: {
    stillPayingTitle: "Still paying for huge electricity Bills?",
    reduceButton: "Reduce It Now",
    boxesContent: [
      {
        title: "Advanced solar panel",
        text: "Syon provides high-quality solar panels specially designed for rural areas. 🌞🏆 Syon provides high-quality solar panels specially designed for rural areas. 🌞🏆",
      },
      {
        title: "Installation and Maintenance",
        text: "Our expert team ensures swift and skilled installation of solar panels in villages 🛠️🔧",
      },
      {
        title: "Consultation and Support",
        text: "We raise awareness among rural residents about solar energy 📞 ",
      },
    ],
  },
  hi: {
    stillPayingTitle: "अभी भी भारी बिजली के बिल चुका रहे हैं?",
    reduceButton: "अब इसे घटाएँ",
    boxesContent: [
      {
        title: "उन्नत सौर पैनल",
        text: "स्योन उच्च गुणवत्ता वाले सौर पैनल प्रदान करता है जो विशेष रूप से ग्रामीण क्षेत्रों के लिए डिज़ाइन किए गए हैं। 🌞🏆 सियोन उच्च गुणवत्ता वाले सौर पैनल प्रदान करता है जो विशेष रूप से ग्रामीण क्षेत्रों के लिए डिज़ाइन किए गए हैं। 🌞🏆",
      },
      {
        title: "स्थापना और रखरखाव",
        text: "हमारी विशेषज्ञ टीम गांवों में सौर पैनलों की त्वरित और कुशल स्थापना सुनिश्चित करती है 🛠️🔧",
      },
      {
        title: "परामर्श और समर्थन",
        text: "हम ग्रामीण निवासियों के बीच सौर ऊर्जा के बारे में जागरूकता बढ़ाते हैं 📞 ",
      },
    ],
  },
};

const boxVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.2,
      ease: "easeInOut",
    },
  }),
};

const AboutComponent = () => {
  const { language } = useLanguage();

  return (
    <div className="container">
      <motion.div
        className="image-wrapper"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src={homeImg} alt="About Us" />
      </motion.div>
      <div className="right-text">
        <h1>{translations[language].stillPayingTitle}</h1>
        <button className="get-quote-btn">
          {translations[language].reduceButton}
        </button>
      </div>
      <div className="boxes-container">
        {translations[language].boxesContent.map((box, index) => (
          <motion.div
            key={index}
            className="box"
            custom={index}
            variants={boxVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>{box.title}</h2>
            <p>{box.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutComponent;
