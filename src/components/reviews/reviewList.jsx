import React from "react";
import ReviewCard from "./reviewCard";
import Review1 from "./Review1.jpg";
import Review2 from "./Review2.jpg";

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
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Alice Johnson",
    rating: 5,
    comment: "Exceeded my expectations. Highly recommend!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Brown",
    rating: 4,
    comment: "Good service, but delivery was slow.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Emily Davis",
    rating: 5,
    comment: "Fantastic experience, will shop here again!",
  },
];

const ReviewList = () => {
  return (
    <div className="review-list-wrapper">
      <h2 className="review-heading">
        <span>90%</span> of customers recommend us
      </h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
