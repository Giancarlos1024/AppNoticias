import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const login = (newToken, userData) => {
        setToken(newToken);
        setUser(userData); // Asegúrate de recibir y guardar userData
        localStorage.setItem('authToken', newToken);
        localStorage.setItem('user', JSON.stringify(userData)); // Guardar userData también
        console.log('User logged in:', userData); // Agregado para depuración
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        console.log('User logged out');
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
