import React, { useEffect, useState } from 'react';
import './SuggestedJobs.css';

const SuggestedJobs = () => {
  const [suggestedJobs, setSuggestedJobs] = useState([]);
  const [veteranSkills, setVeteranSkills] = useState([]);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('veteranProfile')) || {};
    const jobs = JSON.parse(localStorage.getItem('postedJobs')) || [];

    const skills = profile.militarySkills || [];
    setVeteranSkills(skills);

    const matchedJobs = jobs.filter(
      (job) =>
        Array.isArray(job.requiredSkills) &&
        job.requiredSkills.some((skill) => skills.includes(skill))
    );

    setSuggestedJobs(matchedJobs);
  }, []);

  const handleApply = (jobId) => {
    const profile = JSON.parse(localStorage.getItem('veteranProfile')) || {};
    const jobs = JSON.parse(localStorage.getItem('postedJobs')) || [];

    const updatedJobs = jobs.map((job) => {
      if (job.id === jobId) {
        return {
          ...job,
          applicants: [
            ...(job.applications || []),
            {
              name: profile.name || 'Anonymous',
              password: profile.password || '',
              skills: profile.militarySkills || [],
            },
          ],
        };
      }
      return job;
    });

    localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
    alert('Application submitted!');
  };

  return (
    <div className="suggested-container">
      <h2>Suggested Jobs</h2>
      {suggestedJobs.length > 0 ? (
        suggestedJobs.map((job) => (
          <div key={job.id} className="job-suggestion-card">
            <h3>{job.title}</h3>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Required Skills:</strong> {job.requiredSkills.join(', ')}</p>
            <button onClick={() => handleApply(job.id)}>Apply</button>
          </div>
        ))
      ) : (
        <p>No suggested jobs at the moment based on your profile skills.</p>
      )}
    </div>
  );
};

export default SuggestedJobs;
