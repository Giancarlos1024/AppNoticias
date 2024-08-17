import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Sobre Nosotros</h3>
                    <p>Mi Aplicación de Noticias te ofrece las últimas actualizaciones y análisis en el mundo de la información. Mantente al día con nuestras noticias en tiempo real.</p>
                </div>
                
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Dirección: Calle buenos aires 123, argentina</p>
                    <p>Teléfono: +54 9387440-3995</p>
                </div>
                <div className="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        
                        <li><a href="/">Últimas Noticias</a></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li><a href="/categories">Categorias</a></li>
                        <li><a href="/politica">Política de Privacidad</a></li>
                        
                    </ul>
                </div>
                {/* <div className="footer-section">
                    <h3>Suscríbete</h3>
                    <form action="/subscribe" method="post">
                        <input type="email" name="email" placeholder="Tu email" required />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div> */}
                
                <div className="footer-section">
                    <h3>Redes Sociales</h3>
                    <div className="social-icons">
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
               
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mi Aplicación de Noticias. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
