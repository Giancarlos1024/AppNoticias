import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías añadir lógica para enviar el mensaje al servidor
        setStatus('Message sent! Thank you for contacting us.');
    };

    return (
        <div className="contact">
            <h2>CONTACTANOS</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ingrese su nombre completo"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electronico</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese su correo"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="ingrese un mensaje"
                        required
                    ></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Contact;
