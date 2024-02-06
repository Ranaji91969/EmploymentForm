import './App.css';
import React from 'react';
import EmployeeSatisfactionForm from './app/EmployeeSatisfactionForm';
import "../src/styles/satisfaction/AdditionalComments.css";
import '../src/styles/satisfaction/PersonalInfo.css';
import "../src/styles/satisfaction/TeamMatesHelpfulness.css";
import "../src/styles/satisfaction/SatisfactionRating.css";
const App = () => {
  return (
    <div className="app">
      <EmployeeSatisfactionForm />
    </div>
  );
};



export default App;
