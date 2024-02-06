import React, { useState } from 'react';


const TeamMatesHelpfulness = () => {
  const [satisfaction, setSatisfaction] = useState('');

  const handleSatisfactionChange = (value) => {
    setSatisfaction(value);
  };

  return (
    <div className="form-container3">
      <h4 className='h23'>6. Are your team mates helpful to each other?</h4>

      <form>
        <div className="form-group3">
          <input
            type="radio"
            name="satisfaction"
            value="Yes-Totally"
            checked={satisfaction === 'Yes-Totally'}
            onChange={() => handleSatisfactionChange('Yes-Totally')}
          />
          Yes-Totally
        </div>
        <div className="form-group3">
          <input
            type="radio"
            name="satisfaction"
            value="A-Bit"
            checked={satisfaction === 'A-Bit'}
            onChange={() => handleSatisfactionChange('A-Bit')}
          />
          A-Bit
        </div>
        <div className="form-group3">
          <input
            type="radio"
            name="satisfaction"
            value="No-Way"
            checked={satisfaction === 'No-Way'}
            onChange={() => handleSatisfactionChange('No-Way')}
          />
          No-Way
        </div>
        
      </form>
    </div>
  );
};

export default TeamMatesHelpfulness;
