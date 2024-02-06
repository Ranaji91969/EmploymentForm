import React from 'react';


const PersonalInfo = () => {
  return (
    <div className="form-container">
      <div className="form-column1">
      <div className="form-group">
          <div>
          <h4>1. Name</h4>
        </div>
        <div>
          <h4>2. Employee ID</h4>
          </div>
          </div>
      </div>
      <div className="form-column1">
        <div className="form-group">
          <div>
          <input type="text" /> <input type="text" />
          </div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

