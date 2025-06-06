import React from 'react';
import NavigationBar from '../Layout/NavigationBar';
import './Dashboard.css';

const Dashboard = () => {
  const role = localStorage.getItem('userRole'); // ✅ Get the user role

  return (
    <>
      <NavigationBar />
      <div className="dashboard-container">
        <h1>Welcome {role === 'veteran' ? 'Veteran' : role === 'employer' ? 'Employer' : 'Mentor'}</h1>
        {role === 'veteran' && <p>You can update your profile and view job matches.</p>}
        {role === 'employer' && <p>You can post jobs and view veteran applications.</p>}
        {role === 'mentor' && <p>You can manage your mentorship sessions.</p>}
      </div>
    </>
  );
};

export default Dashboard;
