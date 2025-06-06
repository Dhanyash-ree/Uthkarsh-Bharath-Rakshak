import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.email && formData.password) {
      // ✅ Mock login success
      localStorage.setItem('token', 'mock-token');

      // ✅ Get role from localStorage set during role selection
      const role = localStorage.getItem('userRole') || 'veteran';

      // ✅ Navigate based on role (can be customized further)
      if (role === 'employer') {
        navigate('/dashboard'); // can change to /employer-dashboard if separate
      } else if (role === 'mentor') {
        navigate('/dashboard'); // can change to /mentor-dashboard
      } else {
        navigate('/dashboard'); // veteran
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error-text">{error}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
