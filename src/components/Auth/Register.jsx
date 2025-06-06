import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.name && formData.email && formData.password) {
      localStorage.setItem('token', 'mock-token');
      navigate('/dashboard');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <p className="error-text">{error}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Register;
