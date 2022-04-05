import ReactStars from "react-stars";
import React from "react";

const Stars = ({ searchRate, setSearchRate, Rate }) => {
  const ratingChanged = (newRating) => {
    setSearchRate(newRating);
  };

  return (
    <ReactStars
      count={5}
      value={searchRate}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default Stars;
