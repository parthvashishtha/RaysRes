import React from "react";
import ReviewCard from "./reviewCard";

const reviews = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    rating: 5,
    comment: "Amazing product! Will definitely buy again.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Jane Smith",
    rating: 4,
    comment: "Very good quality, but a bit expensive.",
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
