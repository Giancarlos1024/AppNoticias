import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
// import '../css/ProfileSettings.css';

const ProfileSettings = () => {
    const { token, user } = useContext(AuthContext);
    const [email, setEmail] = useState(user.email || '');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías añadir lógica para actualizar la configuración del perfil en el servidor
        setStatus('Profile updated successfully!');
    };

    return (
        <div className="profile-settings">
            <h1>Profile Settings</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New Password"
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default ProfileSettings;
