import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';

const EmployerNavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2>Employer Panel</h2>
      <div className="nav-links">
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/employer/post-job')}>Post Job</button>
        <button onClick={() => navigate('/employer/applications')}>Manage Applications</button>
        <button onClick={() => alert('Go to Review Veterans Page')}>Review Veterans</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default EmployerNavigationBar;
