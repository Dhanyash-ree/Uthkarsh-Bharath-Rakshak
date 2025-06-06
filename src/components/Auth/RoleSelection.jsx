import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Role.css';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole) {
      localStorage.setItem('userRole', selectedRole); // ✅ Save role in localStorage
      navigate('/login'); // or '/register' if you want to go to register first
    } else {
      alert('Please select a role to continue.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Select Your Role</h2>
      <div className="role-buttons">
        <button
          className={selectedRole === 'veteran' ? 'selected' : ''}
          onClick={() => setSelectedRole('veteran')}
        >
          Veteran
        </button>
        <button
          className={selectedRole === 'employer' ? 'selected' : ''}
          onClick={() => setSelectedRole('employer')}
        >
          Employer
        </button>
        <button
          className={selectedRole === 'mentor' ? 'selected' : ''}
          onClick={() => setSelectedRole('mentor')}
        >
          Mentor
        </button>
      </div>
      <br />
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default RoleSelection;
