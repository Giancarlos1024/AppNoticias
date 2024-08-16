// src/components/Notification.jsx
import React from 'react';
import './Notification.css'; // Asumiendo que tienes estilos para este componente

const Notification = ({ message, type }) => {
    return (
        <div className={`notification ${type}`}>
            {message}
        </div>
    );
};

export default Notification;
