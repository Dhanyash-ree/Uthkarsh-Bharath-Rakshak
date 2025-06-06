import React from 'react';
import NavigationBar from '../Layout/NavigationBar';
import './Dashboard.css';

const MentorDashboard = () => (
  <>
    <NavigationBar />
    <div className="dashboard-container">
      <h1>Welcome Mentor</h1>
      <p>View and respond to mentorship requests sent by veterans.</p>
    </div>
  </>
);

export default MentorDashboard;
