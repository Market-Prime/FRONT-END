import React from "react";
import PropTypes from "prop-types";
import "./Reviews.css"; // Import the CSS file for styling
import { HiUserCircle } from "react-icons/hi2";

// Individual Review Card component

const ReviewCard = ({ name, date, rating, comment }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <HiUserCircle className="text-5xl" />
        <div className="review-info">
          <span className="review-name">{name}</span>
          <span className="review-date">On {date}</span>
        </div>
      </div>

      <div className="review-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="star">
              ★
            </span>
          ))}
      </div>
      <p className="review-comment">{comment}</p>
    </div>
  );
};
ReviewCard.propTypes = {
  name: PropTypes.string.isRequired, // name should be a required string
  date: PropTypes.string.isRequired, // date should be a required string
  rating: PropTypes.number.isRequired, // rating should be a required number
  comment: PropTypes.string, // comment is optional, but if provided, it should be a string
};

// Default props for optional props
ReviewCard.defaultProps = {
  comment: "No comment provided.", // Fallback if comment is not passed
};
// Main Reviews component
const Reviews = () => {
  const reviewsData = [
    {
      name: "Folasade Adesope",
      date: "July 31, 2024",
      rating: 5,
      comment: "Exactly what I ordered, perfect size and super quality.",
    },
    {
      name: "David Mercy",
      date: "August 13, 2024",
      rating: 5,
      comment: "I love the item plus the timely delivery.",
    },
    {
      name: "Tope Dan",
      date: "August 20, 2024",
      rating: 5,
      comment: "My items were well packaged and I love the design. Kudos.",
    },
  ];

  return (
    <div className="reviews">
      {reviewsData.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          date={review.date}
          rating={review.rating}
          comment={review.comment}
        />
      ))}
      <button className="see-all-reviews">See all reviews</button>
    </div>
  );
};

export default Reviews;
