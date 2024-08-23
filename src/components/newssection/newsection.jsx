import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useTrail, animated } from "@react-spring/web";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newsection.css";
import newsimg1 from "./newsimg1.jpg";
import newsimg2 from "./newsimg2.jpg";
import newsimg3 from "./newsimg3.jpg";
import newsimg4 from "./newsimg4.jpg";
import { useLanguage } from "../../LanguageContext";

const translations = {
  en: {
    newsHeading: "Solar News",
    readMore: "Read More",
    newsItems: [
      {
        title:
          "India makes major progress on residential solar rooftop scheme PM Surya Ghar",
        date: "2024-07-22",
        link: "https://energy.economictimes.indiatimes.com/news/renewable/india-makes-major-progress-on-residential-solar-rooftop-scheme-pm-surya-ghar/111913518#:~:text=PM%20Surya%20Ghar%20scheme%2C%20a,India's%20shift%20toward%20sustainable%20energy.",
      },
      {
        title:
          "Budget 2024 Expectation: PM Surya Ghar Muft Bijli Yojana – Explained",
        date: "2024-07-21",
        link: "https://www.financialexpress.com/budget/budget-2024-expectation-pm-surya-ghar-muft-bijli-yojana-explained-3559510/",
      },
      {
        title:
          "More than one lakh people register for PM Suryaghar Yojana in Rajasthan so far",
        date: "2024-07-21",
        link: "https://www.pv-magazine-india.com/2024/03/11/more-than-one-lakh-people-register-for-pm-suryaghar-yojana-in-rajasthan-so-far/",
      },
      {
        title:
          "PM Surya Ghar: Govt buildings to achieve full rooftop solar saturation by 2025",
        date: "2024-07-21",
        link: "https://energy.economictimes.indiatimes.com/news/renewable/pm-surya-ghar-govt-buildings-to-achieve-full-rooftop-solar-saturation-by-2025/111528217",
      },
    ],
  },
  hi: {
    newsHeading: "सोलर समाचार",
    readMore: "अधिक पढ़ें",
    newsItems: [
      {
        title:
          "भारत ने आवासीय सोलर रूफटॉप योजना पीएम सूर्य घर में प्रमुख प्रगति की",
        date: "2024-07-22",
        link: "https://energy.economictimes.indiatimes.com/news/renewable/india-makes-major-progress-on-residential-solar-rooftop-scheme-pm-surya-ghar/111913518#:~:text=PM%20Surya%20Ghar%20scheme%2C%20a,India's%20shift%20toward%20sustainable%20energy.",
      },
      {
        title:
          "बजट 2024 अपेक्षा: पीएम सूर्य घर मुफ़्त बिजली योजना – स्पष्ट किया गया",
        date: "2024-07-21",
        link: "https://www.financialexpress.com/budget/budget-2024-expectation-pm-surya-ghar-muft-bijli-yojana-explained-3559510/",
      },
      {
        title:
          "राजस्थान में अब तक पीएम सूर्यघर योजना के लिए एक लाख से अधिक लोग पंजीकृत",
        date: "2024-07-21",
        link: "https://www.pv-magazine-india.com/2024/03/11/more-than-one-lakh-people-register-for-pm-suryaghar-yojana-in-rajasthan-so-far/",
      },
      {
        title:
          "पीएम सूर्य घर: सरकारी भवन 2025 तक पूर्ण रूफटॉप सोलर सैचुरेशन प्राप्त करेंगे",
        date: "2024-07-21",
        link: "https://energy.economictimes.indiatimes.com/news/renewable/pm-surya-ghar-govt-buildings-to-achieve-full-rooftop-solar-saturation-by-2025/111528217",
      },
    ],
  },
};

const newsData = [
  {
    title: newsimg1,
    date: "2024-07-22",
    image: newsimg1,
    link: "https://energy.economictimes.indiatimes.com/news/renewable/india-makes-major-progress-on-residential-solar-rooftop-scheme-pm-surya-ghar/111913518#:~:text=PM%20Surya%20Ghar%20scheme%2C%20a,India's%20shift%20toward%20sustainable%20energy.",
  },
  {
    title: newsimg2,
    date: "2024-07-21",
    image: newsimg2,
    link: "https://www.financialexpress.com/budget/budget-2024-expectation-pm-surya-ghar-muft-bijli-yojana-explained-3559510/",
  },
  {
    title: newsimg3,
    date: "2024-07-21",
    image: newsimg3,
    link: "https://www.pv-magazine-india.com/2024/03/11/more-than-one-lakh-people-register-for-pm-suryaghar-yojana-in-rajasthan-so-far/",
  },
  {
    title: newsimg4,
    date: "2024-07-21",
    image: newsimg4,
    link: "https://energy.economictimes.indiatimes.com/news/renewable/pm-surya-ghar-govt-buildings-to-achieve-full-rooftop-solar-saturation-by-2025/111528217",
  },
];

const NewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage(); // Use the global language state

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("news-section");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trail = useTrail(newsData.length, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(20px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="news-section" className="slider">
      <div className="newsHeading">
        <h1>{translations[language].newsHeading}</h1>
        <Slider {...settings}>
          {trail.map((style, index) => (
            <animated.div style={style} key={index}>
              <Card className="card">
                <CardMedia
                  className="media"
                  image={newsData[index].image}
                  title={translations[language].newsItems[index].title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {translations[language].newsItems[index].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {translations[language].newsItems[index].date}
                  </Typography>
                </CardContent>
                <CardActions className="readMoreButton">
                  <Button
                    size="small"
                    color="primary"
                    href={translations[language].newsItems[index].link}
                  >
                    {translations[language].readMore}
                  </Button>
                </CardActions>
              </Card>
            </animated.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewSection;
