import React, { useEffect, useState, useRef } from "react";
import ReviewCard from "./reviewCard";
import Review1 from "./Review1.jpg";
import Review2 from "./Review2.jpg";
import "./review.css";

const reviews = [
  {
    image: Review1,
    name: "Narendra Tomar",
    rating: 5,
    comment:
      "मैं अपने ऊँचे बिजली के बिलों के लिए एक समाधान ढूंढ रहा था और रेज रूफटॉप ने हमें सबसे अच्छा समाधान दिया।",
  },
  {
    image: Review2,
    name: "Bhim Rao",
    rating: 4,
    comment:
      "हमारा हाल ही में रेज रूफटॉप के साथ सोलर इंस्टालेशन का अनुभव बेहतरीन रहा। हमारे मासिक बिजली के खर्चे काफी कम हो गए हैं।",
  },
  {
    image: Review1,
    name: "Holaram",
    rating: 5,
    comment: "GG",
  },
  {
    image: Review2,
    name: "Holaram",
    rating: 4,
    comment: "GG",
  },
  {
    image: Review1,
    name: "Holaram",
    rating: 5,
    comment: "GG",
  },
];

const ReviewList = () => {
  const [extendedReviews, setExtendedReviews] = useState([]);
  const reviewListRef = useRef(null);

  useEffect(() => {
    const cloneCount = Math.min(reviews.length, 3);
    setExtendedReviews([...reviews, ...reviews.slice(0, cloneCount)]);
  }, []);

  useEffect(() => {
    const reviewList = reviewListRef.current;
    if (!reviewList) return;

    const scroll = () => {
      if (
        reviewList.scrollLeft >=
        (reviewList.scrollWidth - reviewList.clientWidth) / 2
      ) {
        reviewList.scrollLeft = 0;
      } else {
        reviewList.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="review-list-wrapper">
      <h2 className="review-heading">
        <span>90%</span> of customers recommend us
      </h2>
      <div className="review-list-container">
        <div className="review-list" ref={reviewListRef}>
          {extendedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
