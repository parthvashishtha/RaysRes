import React from "react";
import styles from "./whyChooseUs.module.css";
import mainImage from "./main.png";
import subHeading1Img from "./subHeading1.png";
import subHeading2Img from "./subHeading2.png";
import subHeading3Img from "./subHeading3.png";
import subHeading4Img from "./subHeading4.png";

const WhyChooseUs = () => {
  const subHeadings = [
    {
      image: subHeading1Img,
      heading: "Long-term Durability",
      content:
        "Extremely durable and suitable for long-term use. This ensures that you receive reliable energy for years to come.🌞🔋",
    },
    {
      image: subHeading2Img,
      heading: "Smart Monitoring System",
      content:
        "Allowing you to monitor your energy production and consumption in real-time. 📊🔧",
    },
    {
      image: subHeading3Img,
      heading: "Designed for Rural Areas",
      content:
        "Providing better and more reliable energy sources for the residents there.🌾🏡",
    },
    {
      image: subHeading4Img,
      heading: "Training for Solar Energy",
      content:
        "Benefits of solar energy in local communities and provide training for their use and maintenance. 👥",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.mainHeading}>Why Choose Us</h1>
        <div className={styles.subHeadings}>
          {subHeadings.map((item, index) => (
            <div key={index} className={styles.subHeadingItem}>
              <img
                src={item.image}
                alt={item.heading}
                className={styles.subHeadingImage}
              />
              <div className={styles.subHeadingText}>
                <h2>{item.heading}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={mainImage} alt="Why Choose Us" className={styles.mainImage} />
      </div>
    </section>
  );
};

export default WhyChooseUs;
