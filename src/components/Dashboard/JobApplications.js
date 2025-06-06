import React, { useEffect, useState } from 'react';
import './JobApplications.css';

const JobApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
    setApplications(storedApplications);
  }, []);

  return (
    <div className="applications-container">
      <h2>Veteran Applications</h2>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        applications.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.jobTitle}</h3>
            <p><strong>Required Skills:</strong> {job.requiredSkills.join(', ')}</p>
            <p><strong>Number of Applications:</strong> {job.applicants.length}</p>

            {job.applicants.map((applicant, idx) => (
              <div className="applicant-card" key={idx}>
                <p><strong>Name:</strong> {applicant.name}</p>
                <p><strong>Password:</strong> {applicant.password}</p>
                <p><strong>Skills:</strong> {applicant.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default JobApplications;
