import React from "react";
import "./review.css";

const reviews = ({ review }) => {
  return (
    <div className="review-container">
      <div className="review-image">
        <img src={review.image} alt={review.name} />
      </div>
      <div className="review-content">
        <div className="review-name">{review.name}</div>
        <div className="review-rating">{"⭐".repeat(review.rating)}</div>
        <div className="review-comment">{review.comment}</div>
      </div>
    </div>
  );
};

export default reviews;
