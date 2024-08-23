import React from "react";
import styles from "./companysection.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import videoDis from "./video.mp4";
import { useLanguage } from "../../LanguageContext";

const translations = {
  en: {
    journeyTitle: "Our Journey",
    milestonesSubtitle: "Milestones | Mission | Vision",
    missionTitle: "Our Mission",
    missionText:
      "Syon's mission is to make rural India energy self-reliant by providing clean, affordable and accessible solar energy. Our objective is not only to solve energy problems but also to preserve the environment and contribute to social development.",
    visionTitle: "Our Vision",
    visionText:
      "Lack of electricity is a big problem in rural areas. The objective of Syon is that every household should have access to energy and they too can avail the benefits of electricity. Through solar energy we ensure that people living in villages get continuous and reliable electricity. People living in villages should get continuous and reliable electricity, so that their daily life activities can go on without any interruption.",
    milestones: [
      { text: "500+", description: "Establishment in villages" },
      { text: "1000+", description: "Assistance to farmers" },
      { text: "50+", description: "Training and Awareness" },
    ],
  },
  hi: {
    journeyTitle: "हमारी यात्रा",
    milestonesSubtitle: "आंकड़े | मिशन | उद्देश्य",
    missionTitle: "हमारा मिशन",
    missionText:
      "स्योन  का मिशन ग्रामीण भारत को स्वावलंबी बनाना है, जिससे वह स्वच्छ, सस्ती और सुलभ सौर ऊर्जा प्राप्त कर सके। हमारा उद्देश्य न केवल ऊर्जा समस्याओं को हल करना है, बल्कि पर्यावरण को भी संरक्षित करना और सामाजिक विकास में योगदान देना है।",
    visionTitle: "हमारा उद्देश्य",
    visionText:
      "ग्रामीण क्षेत्रों में बिजली की कमी एक बड़ी समस्या है। सियोन का उद्देश्य है कि हर घर को ऊर्जा की पहुंच हो और वे भी बिजली के लाभ उठा सकें। सौर ऊर्जा के माध्यम से हम यह सुनिश्चित करते हैं कि गांवों में रहने वाले लोगों को निरंतर और विश्वसनीय बिजली मिले। लोगों को निरंतर और विश्वसनीय बिजली मिलनी चाहिए ताकि उनके दैनिक जीवन की गतिविधियाँ बिना किसी रुकावट के चल सकें।",
    milestones: [
      { text: "500+", description: "गांवों में स्थापना" },
      { text: "1000+", description: "किसानों की सहायता" },
      { text: "50+", description: "प्रशिक्षण और जागरूकता" },
    ],
  },
};

const CompanySection = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <header className={styles.header} ref={headerRef}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {translations[language].journeyTitle}
        </motion.h1>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          {translations[language].milestonesSubtitle}
        </motion.h2>
      </header>
      <div className={styles.timeline} ref={timelineRef}>
        {translations[language].milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className={styles.milestone}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -100 }}
            animate={timelineInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.milestoneText}>{milestone.text}</h3>
            <p>{milestone.description}</p>
          </motion.div>
        ))}
      </div>
      <div className={styles.sectionContent}>
        <motion.div
          className={styles.contentBox}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -100 }}
          animate={missionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3 }}
          ref={missionRef}
        >
          <h3 className={styles.missionVisionTitle}>
            {translations[language].missionTitle}
          </h3>
          <p className={styles.missionVisionText}>
            {translations[language].missionText}
          </p>
        </motion.div>
        <motion.div
          className={styles.contentBox}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 100 }}
          animate={visionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={visionRef}
        >
          <h3 className={styles.missionVisionTitle}>
            {translations[language].visionTitle}
          </h3>
          <p className={styles.missionVisionText}>
            {translations[language].visionText}
          </p>
        </motion.div>
      </div>
      <div className={styles.videoSection} ref={videoRef}>
        <motion.video
          className={styles.video}
          initial={{ opacity: 0 }}
          animate={videoInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          controls
        >
          <source src={videoDis} />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </section>
  );
};

export default CompanySection;
