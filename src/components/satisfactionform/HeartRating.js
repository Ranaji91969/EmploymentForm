import React, { useState } from 'react';

const HeartRating = ({ totalHearts, question, onChange }) => {
  const [rating, setRating] = useState(0);

  const handleHeartClick = (selectedRating) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    // <div className='heart-r' >
    //     <h4>3.How would you rate your supervisor's attitude <br/>towards you and the rest of the team?</h4>
    //   <p>{}</p>
     
    //   {[...Array(totalHearts)].map((_, index) => (
    //     <span
    //       key={index}
    //       onClick={() => handleHeartClick(index + 1)}
    //       style={{
    //         cursor: 'pointer',
    //         color: index < rating ? 'red' : 'rgb(46, 117, 117)',
            
    //       }}
    //     >
    //       &#x2665; {/* Unicode for a heart character */}
        
    //     </span>
      
    //   ))}
    // </div>

    <div className='flexdata'>
      <div>
      <h4>3.How would you rate your supervisor's attitude <br/>towards you and the rest of the team?</h4>

      </div>
      <div className='heartingrate'>
      {[...Array(totalHearts)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleHeartClick(index + 1)}
          style={{
            cursor: 'pointer',
            color: index < rating ? 'red' : 'rgb(46, 117, 117)',
            
          }}
        >
          &#x2665; {/* Unicode for a heart character */}
        
        </span>
      
      ))}
      </div>
    </div>
    
  );
};

export default HeartRating;

