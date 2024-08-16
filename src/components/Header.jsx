import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../css/Header.css';

const Header = () => {
    const { token, logout, user } = useContext(AuthContext);
    console.log('User in Header:', user); // Agregado para depuración
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleUserMenu = () => {
        setUserMenuOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirige a la página principal después de cerrar sesión
    };

    return (
        <header>
            <div className='headerTop'>
                <div className='informacion'>
                    <img src="/img/telefono.png" alt="Número de teléfono" />
                    <a href="tel:+51999555444" id='informacionTCEnlace1'>+51 999555444</a>
                    <img src="/img/gmail.png" alt="Correo electrónico" />
                    <a href="mailto:giancarlosvlsqz@gmail.com" id='informacionTCEnlace2'>giancarlosvlsqz@gmail.com</a>
                </div>
                <div className='redesSociales'>
                    <a href="https://facebook.com" aria-label="Facebook">
                        <img src="/img/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://wa.me/+51999555444" aria-label="WhatsApp">
                        <img src="/img/whatsapp.png" alt="WhatsApp" />
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <img src="/img/twitter.png" alt="Twitter" />
                    </a>
                    <a href="https://youtube.com" aria-label="YouTube">
                        <img src="/img/youtube.png" alt="YouTube" />
                    </a>
                </div>
            </div>
            <section className='headerBot'>
                <div className="logo">
                    <Link to="/">
                        <img className='logoImg' src="/img/logoNoticias.png" alt="Logo de NotiFast" />
                        <p className='NombreLogo'>NOTIFAST</p>
                    </Link>
                </div>
                <nav>
                    <ul className='nav-links'>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Acerca de</Link></li>
                        <li><Link to="/categories">Categorías</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </ul>
                </nav>
                <div className='search-bar'>
                    <input type='text' placeholder='Buscar...' />
                    <button>Buscar</button>
                </div>
                <div className='user-menu'>
                    {token ? (
                        <div className='user-info'>
                            <img 
                                src="/img/avatar.png" 
                                alt="Avatar de usuario" 
                                className='user-avatar' 
                                onClick={toggleUserMenu} 
                            />
                            {userMenuOpen && (
                                <ul className='user-menu-options'>
                                    <li className='user-name'>USUARIO : {user?.name || 'Usuario'}</li>
                                    <li><Link to="/profile">PERFIL</Link></li>
                                    <li><Link to="/settings">CONFIGURACIÓN</Link></li>
                                    <li><button className='logout-button' onClick={handleLogout}>CERRAR SESIÓN</button></li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" id="colorIniciosesion" className='login-link'>Iniciar sesión</Link>
                    )}
                </div>
            </section>
        </header>
    );
};

export default Header;
