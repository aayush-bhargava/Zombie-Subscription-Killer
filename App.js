import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Upload from './components/Upload';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);

  return (
      <Routes>
        <Route
            path="/"
            element={
              <Home
                  onLogin={() => setIsLoggedIn(true)}
              />
            }
        />
        <Route
            path="/upload"
            element={isLoggedIn ? <Upload onUpload={() => setHasUploaded(true)} /> : <Navigate to="/" />}
        />
        <Route
            path="/dashboard"
            element={isLoggedIn && hasUploaded ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
  );
};

export default App;
