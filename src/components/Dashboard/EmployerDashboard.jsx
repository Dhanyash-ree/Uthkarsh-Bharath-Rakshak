import React from 'react';
import EmployerNavigationBar from '../Layout/EmployerNavigationBar';
import './Dashboard.css';

const EmployerDashboard = () => (
  <>
         <EmployerNavigationBar />
    <div className="dashboard-container">
      <h1>Welcome Employer</h1>
      <p>Post job openings, manage applications, and review veteran profiles.</p>
    </div>
  </>
);

export default EmployerDashboard;
