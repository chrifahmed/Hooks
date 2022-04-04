import ReactStars from "react-stars";
import React from "react";

const Stars = (ratingChanged) => {
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default Stars;
