// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Asegúrate de que esta ruta sea correcta
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../css/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext); // Usa el contexto
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log('login function:', login);
    
        fetch('https://sandbox.academiadevelopers.com/api-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Authentication failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response data:', data);
            if (data.token) {
                // Aquí asumimos que la API solo devuelve el token. Ajusta si es necesario.
                login(data.token, { name: username }); // Usa un valor de ejemplo para userData
                navigate('/');
            } else {
                throw new Error('No token received');
            }
        })
        .catch(error => {
            console.error('Error during authentication:', error);
            setError('Error de autenticación. Verifique sus credenciales.');
        });
    };
    
    

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Iniciar Sesión</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Usuario</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input"
                            placeholder="ingresa tu nombre de usuario"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            placeholder="ingresa tu contraseña"
                        />
                    </div>
                    <button type="submit" className="login-button">Iniciar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
