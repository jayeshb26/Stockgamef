import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ element }) => {
  const token = localStorage.getItem('token'); // Get token from local storage

  // Check if user is authenticated based on token
  const isAuthenticated = !!token;

  if (isAuthenticated) {
    return element; // Allow access to the route if authenticated
  }

  return <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default AuthGuard;
