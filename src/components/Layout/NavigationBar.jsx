import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Bharat Rakshak</div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* Add more links as you build new pages */}
        <li><button onClick={logout} className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
