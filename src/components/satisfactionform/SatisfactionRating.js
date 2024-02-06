import React, { useState } from 'react';


const StarRating = ({ totalStars, onChange, question }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (selectedRating) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <div className='flexdata'>
      <div>
      <h4>{question}</h4>
      </div>
      <div className='heartingrate1'>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? '#ffd700' : 'rgb(46, 117, 117)', }}
        >
          &#9733;
        </span>
      ))}
    </div>
    </div>
  );
};

export default StarRating;
