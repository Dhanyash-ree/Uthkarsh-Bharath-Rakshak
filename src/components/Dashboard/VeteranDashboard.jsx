import React from 'react';
import NavigationBar from '../Layout/NavigationBar';
import SuggestedJobs from './SuggestedJobs';
import './Dashboard.css';

const VeteranDashboard = () => (
  <>
    <NavigationBar />
    <div className="dashboard-container">
      <h1>Welcome Veteran</h1>
      <p>You can update your profile, view job matches, and request mentorship.</p>
      
      <h2>Suggested Jobs Based on Your Skills</h2>
      <SuggestedJobs />
    </div>
  </>
);

export default VeteranDashboard;
