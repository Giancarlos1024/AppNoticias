// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        // Elimina el token de autenticación del almacenamiento local
        localStorage.removeItem('token');
        // Redirige al usuario a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <header>
            <div className='headerTop'>
                <div className='informacion'>
                    <img src="/img/telefono.png" alt="telefono" />
                    <a href="#" id='informacionTCEnlace1'>+51 999555444</a>
                    <img src="/img/gmail.png" alt="gmail" />
                    <a href="#" id='informacionTCEnlace2'>giancarlosvlsqz@gmail.com</a>
                </div>
                <div className='redesSociales'>
                    <img src="/img/facebook.png" alt="facebook" />
                    <img src="/img/whatsapp.png" alt="whatsapp" />
                    <img src="/img/twiteer.png" alt="twitter" />
                    <img src="/img/youtube.png" alt="youtube" />
                </div>
            </div>
            <section className='headerBot'>
                <div className="logo">
                    <Link to="/">
                        <img className='logoImg' src="/img/logoNoticias.png" alt="logo" />
                        <p className='NombreLogo'>NOTIFAST</p>
                    </Link>
                </div>
                <nav>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;
