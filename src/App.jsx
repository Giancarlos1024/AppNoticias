// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AuthenticatedRequest from './pages/AuthenticatedRequest';
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <AuthenticatedRequest>
              <Profile />
            </AuthenticatedRequest>
          } />
          
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
