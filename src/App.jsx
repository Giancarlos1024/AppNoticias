// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext'; // Asegúrate de importar el AuthProvider
import './App.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header /> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
