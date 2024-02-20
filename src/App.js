import './App.css';
import React from 'react';
import EmploymentSatisfactionForm from './app/EmployeeSatisfactionForm';
import "../src/styles/satisfaction/AdditionalComments.css"
import "../src/styles/satisfaction/PersonalInfo.css"
import "../src/styles/satisfaction/TeamMatesHelpfulness.css"
import "../src/styles/satisfaction/SatisfactionRating.css"



function App() {
  return (
    <>
      <div className='app'>
      <EmploymentSatisfactionForm/>
      </div>
    </>
  )
}

export default App
