// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import '../css/Profile.css'; // Asegúrate de importar el archivo CSS

const Profile = () => {
    const [user, setUser] = useState(null);
    const [avatar, setAvatar] = useState(null); // Estado para la imagen de perfil

    useEffect(() => {
        // Obtén el perfil del usuario
        fetch('http://localhost:3000/api/profile', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setUser(data);
            // Recupera la imagen de perfil del localStorage
            const savedAvatar = localStorage.getItem('profileAvatar');
            setAvatar(savedAvatar || 'https://via.placeholder.com/150');
        })
        .catch(error => console.error('Error fetching profile:', error));
    }, []);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                const base64Image = fileReader.result;
                setAvatar(base64Image);
                // Guarda la imagen en el localStorage
                localStorage.setItem('profileAvatar', base64Image);
            };
            fileReader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías enviar la imagen al servidor si es necesario
        alert('Profile picture updated (static implementation)');
    };

    if (!user) return <div className="profile-loading">Loading...</div>;

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img
                        src={avatar || 'https://via.placeholder.com/150'}
                        alt="Profile Avatar"
                        className="profile-avatar"
                    />
                </div>
                <div className="profile-details">
                    <h1 className="profile-name">{user.name}</h1>
                    <p className="profile-email">{user.email}</p>
                </div>
                <form onSubmit={handleSubmit} className="upload-form">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <button type="submit" className="upload-button">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
