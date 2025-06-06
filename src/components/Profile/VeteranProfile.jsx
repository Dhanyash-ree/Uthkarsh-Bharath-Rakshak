import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VeteranProfile.css';


const VeteranProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceBranch: '',
    yearsOfService: '',
    militarySkills: [],
    careerPreferences: [],
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('veteranProfile');
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    }
  }, []);

  const militarySkillsOptions = [
    'Leadership',
    'Logistics',
    'Strategy',
    'Cybersecurity',
    'Field Operations',
    'Communications',
  ];

  const careerPreferencesOptions = [
    'Project Management',
    'Operations',
    'Cybersecurity',
    'Technical Support',
    'Training & Development',
    'Administrative Roles',
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e, category) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setFormData((prev) => {
      const updatedList = isChecked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value);

      return {
        ...prev,
        [category]: updatedList,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('veteranProfile', JSON.stringify(formData));
    alert('Profile saved!');
    // navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>Veteran Profile Management</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>Service Branch</label>
        <input
          type="text"
          name="serviceBranch"
          placeholder="e.g. Indian Army"
          value={formData.serviceBranch}
          onChange={handleInputChange}
          required
        />

        <label>Years of Service</label>
        <input
          type="number"
          name="yearsOfService"
          placeholder="e.g. 10"
          value={formData.yearsOfService}
          onChange={handleInputChange}
          required
        />

        <label>Military Skills</label>
        <div className="checkbox-group">
          {militarySkillsOptions.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={formData.militarySkills.includes(skill)}
                onChange={(e) => handleCheckboxChange(e, 'militarySkills')}
              />
              {skill}
            </label>
          ))}
        </div>

        <label>Career Preferences</label>
        <div className="checkbox-group">
          {careerPreferencesOptions.map((career) => (
            <label key={career}>
              <input
                type="checkbox"
                value={career}
                checked={formData.careerPreferences.includes(career)}
                onChange={(e) => handleCheckboxChange(e, 'careerPreferences')}
              />
              {career}
            </label>
          ))}
        </div>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default VeteranProfile;
