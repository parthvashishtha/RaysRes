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

const newsData = [
  {
    title: "News Title 1",
    date: "2024-07-20",
    image: "https://via.placeholder.com/140",
    link: "/news/1",
  },
  {
    title: "News Title 2",
    date: "2024-07-21",
    image: "https://via.placeholder.com/140",
    link: "/news/2",
  },
  {
    title: "News Title 3",
    date: "2024-07-21",
    image: "https://via.placeholder.com/140",
    link: "/news/3",
  },
  {
    title: "News Title 4",
    date: "2024-07-21",
    image: "https://via.placeholder.com/140",
    link: "/news/4",
  },
  // Add more news items here
];

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <h1>Solar News</h1>
        <Slider {...settings}>
          {trail.map((style, index) => (
            <animated.div key={index} style={style}>
              <Card className="card">
                <CardMedia
                  className="media"
                  image={newsData[index].image}
                  title={newsData[index].title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {newsData[index].title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {newsData[index].date}
                  </Typography>
                </CardContent>
                <CardActions className="readMoreButton">
                  <Button
                    size="small"
                    color="primary"
                    href={newsData[index].link}
                  >
                    Read More
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

export default NewsSection;
