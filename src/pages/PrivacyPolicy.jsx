import React from 'react';
import '../css/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <h1>Política de Privacidad</h1>
            <p>
                En Notifast, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos, compartimos y protegemos tu información.
            </p>

            <section className="section">
                <h2>1. Información que Recopilamos</h2>
                <p>
                    Recopilamos información que proporcionas directamente, como tu nombre, dirección de correo electrónico y cualquier otra información que decidas compartir con nosotros. También recopilamos información automáticamente, como datos sobre tu uso del sitio web y la información de tu dispositivo.
                </p>
            </section>

            <section className="section">
                <h2>2. Uso de la Información</h2>
                <p>
                    Utilizamos la información que recopilamos para mejorar tu experiencia en nuestro sitio web, para personalizar el contenido y para comunicarnos contigo. También podemos usarla para fines de análisis y para cumplir con nuestras obligaciones legales.
                </p>
            </section>

            <section className="section">
                <h2>3. Compartición de la Información</h2>
                <p>
                    No compartimos tu información personal con terceros, excepto en los casos en que sea necesario para cumplir con la ley, proteger nuestros derechos o con tu consentimiento.
                </p>
            </section>

            <section className="section">
                <h2>4. Seguridad de la Información</h2>
                <p>
                    Implementamos medidas de seguridad para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar la seguridad absoluta.
                </p>
            </section>

            <section className="section">
                <h2>5. Derechos del Usuario</h2>
                <p>
                    Tienes el derecho de acceder, corregir o eliminar tu información personal. Puedes contactarnos en cualquier momento para ejercer estos derechos.
                </p>
            </section>

            <section className="section">
                <h2>6. Cambios en la Política de Privacidad</h2>
                <p>
                    Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cualquier cambio publicando la nueva política en nuestro sitio web.
                </p>
            </section>

            <section className="section">
                <h2>7. Contacto</h2>
                <p>
                    Si tienes alguna pregunta sobre nuestra política de privacidad, no dudes en contactarnos a <a href="mailto:lucia@gmail.com">lucia@gmail.com</a>.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
