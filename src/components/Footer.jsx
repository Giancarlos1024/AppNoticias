import React from 'react';
import '../css/Footer.css';
const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Mi Aplicación de Noticias. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
