// src/pages/Profile.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import '../css/Profile.css';

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <p>Please log in to view your profile.</p>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src="/img/avatar.png" alt={`${user.name}'s avatar`} className="profile-avatar" />
            </div>
            <div className="profile-details">  
                <p><strong>Usuario:</strong> {user.name}</p>
                <p><strong>Correo:</strong> {user.email}</p> {/* Mostrar correo electrónico */}
            </div>
        </div>
    );
};

export default Profile;
