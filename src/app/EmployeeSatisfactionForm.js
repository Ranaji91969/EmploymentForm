import React, { useState } from 'react';
import '../styles/satisfaction/EmployeeSatisfactionForm.css';
import Header from '../components/satisfactionform/Header';
import PersonalInfo from '../components/satisfactionform/PersonalInfo';
import StarRating from '../components/satisfactionform/SatisfactionRating';
import TeamSatisfaction from '../components/satisfactionform/TeamSatisfaction';
import TeamMatesHelpfulness from '../components/satisfactionform/TeamMatesHelpfulness';
import AdditionalComments from '../components/satisfactionform/AdditionalComments';
import HeartRating from '../components/satisfactionform/HeartRating';
import ThanksPage from '../components/satisfactionform/ThanksPage';
import headerImage from"../styles/satisfaction/header.png";


const EmployeeSatisfactionForm = () => {
  const [satisfaction, setSatisfaction] = useState('');
  const [supervisorSatisfaction, setSupervisorSatisfaction] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSatisfactionChange = (newSatisfaction) => {
    setSatisfaction(newSatisfaction);
  };

  const handleSupervisorSatisfactionChange = (selectedRating) => {
    setSupervisorSatisfaction(selectedRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Satisfaction level:', satisfaction);
    console.log('Supervisor satisfaction level:', supervisorSatisfaction);
    event.preventDefault(); 
    setIsSubmitted(true);
  };
  return (
    <div className="employee-satisfaction-form">
      <Header  headerImage={headerImage}/>
      <h1>Employee Satisfaction</h1>
      <p>Help us improve your experience in this company</p>
      <form onSubmit={handleSubmit} className="form-row">
        <PersonalInfo />
        
        <HeartRating   
        
        onChange={handleSupervisorSatisfactionChange}
       
        totalHearts={5}
      />
      
       
      <StarRating
       question="4. How would you rate our HR manager's attitude?"
          totalStars={5}
          onChange={handleSatisfactionChange}
        />

        
        <TeamSatisfaction />
        <TeamMatesHelpfulness  >
       
  
  
</TeamMatesHelpfulness>
    

        <AdditionalComments />
        
        <div className='submit'>
        {!isSubmitted ? (
            <button type="submit">Submit</button>
          ) : (
            <ThanksPage />
          )}
        </div>
      </form>
    </div>
  );
};

export default EmployeeSatisfactionForm;
