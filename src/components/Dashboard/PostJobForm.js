import React, { useState, useEffect } from 'react';
import './PostJobForm.css';

const PostJobForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    requiredSkills: [],
  });

  const [jobs, setJobs] = useState([]);

  const skillOptions = [
    'Leadership',
    'Cybersecurity',
    'Communication',
    'Project Management',
    'Logistics',
    'Field Operations',
  ];

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setJobData((prev) => ({
      ...prev,
      requiredSkills: isChecked
        ? [...prev.requiredSkills, value]
        : prev.requiredSkills.filter((skill) => skill !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedJobs = [...jobs, { ...jobData, id: Date.now(), applicants: [] }];
    localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
    alert('Job posted successfully!');
    setJobData({ title: '', description: '', requiredSkills: [] });
    setShowForm(false);
  };

  // 🆕 Refresh job list from localStorage on every render
  useEffect(() => {
    const saved = localStorage.getItem('postedJobs');
    setJobs(saved ? JSON.parse(saved) : []);
  }, [showForm]);

  return (
    <div className="post-job-container">
      <button onClick={toggleForm}>
        {showForm ? 'Cancel' : 'Post a New Job'}
      </button>

      {showForm && (
        <form className="job-form" onSubmit={handleSubmit}>
          <label>Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
          />

          <label>Job Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
          />

          <label>Required Skills</label>
          <div className="checkbox-group">
            {skillOptions.map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={jobData.requiredSkills.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
          </div>

          <button type="submit">Post Job</button>
        </form>
      )}

      <div className="posted-jobs">
        <h3>Posted Jobs</h3>
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h4>{job.title}</h4>
            <p>{job.description}</p>
            <p><strong>Required Skills:</strong> {job.requiredSkills.join(', ')}</p>
            <p><strong>Applications:</strong> {(job.applicants || []).length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostJobForm;
