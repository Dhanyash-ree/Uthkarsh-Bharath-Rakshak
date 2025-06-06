import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RoleSelection from './components/Auth/RoleSelection';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Auth/PrivateRoute';

import VeteranDashboard from './components/Dashboard/VeteranDashboard';
import EmployerDashboard from './components/Dashboard/EmployerDashboard';
import MentorDashboard from './components/Dashboard/MentorDashboard';

import VeteranProfile from './components/Profile/VeteranProfile';
import PostJobForm from './components/Dashboard/PostJobForm';
import JobApplications from './components/Dashboard/JobApplications';
import SuggestedJobs from './components/Dashboard/SuggestedJobs';


function App() {
  const role = localStorage.getItem('userRole');

  // Dynamically return dashboard component based on role
  const getDashboardComponent = () => {
    switch (role) {
      case 'veteran':
        return <VeteranDashboard />;
      case 'employer':
        return <EmployerDashboard />;
      case 'mentor':
        return <MentorDashboard />;
      default:
        return <Login />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {getDashboardComponent()}
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <VeteranProfile />
            </PrivateRoute>
          }
        />

        {/* Employer-specific routes */}
        <Route
          path="/employer/post-job"
          element={
            <PrivateRoute>
              <PostJobForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/employer/applications"
          element={
            <PrivateRoute>
              <JobApplications />
            </PrivateRoute>
          }
        />
        <Route
  path="/veteran/suggested-jobs"
  element={
    <PrivateRoute>
      <SuggestedJobs />
    </PrivateRoute>
  }
/>

      </Routes>
    </Router>
  );
}

export default App;
