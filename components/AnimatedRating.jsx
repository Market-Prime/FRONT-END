import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const AnimatedRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) onRatingChange(newRating);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const isHalfStar = index + 0.5 < rating && index + 1 > rating;
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="cursor-pointer text-2xl transition-transform transform hover:scale-110"
          >
            {isHalfStar ? (
              <FaStarHalfAlt />
            ) : index < rating ? (
              <FaStar />
            ) : (
              <FaRegStar />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedRating;
