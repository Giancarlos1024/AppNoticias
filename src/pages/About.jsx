import React from 'react';
import '../css/About.css';

const About = () => {
    return (
        <div className="about">
            <section className="intro">
                <h1>Sobre Nosotros</h1>
                <p>
                    Somos un equipo de tres apasionados por el periodismo digital y la tecnología, dedicados a crear una plataforma de noticias que mantenga a nuestros usuarios informados y conectados con los eventos más relevantes. 
                    Nuestro sitio web se centra en ofrecer noticias precisas, actualizadas y bien investigadas para que puedas estar al tanto de lo que realmente importa.
                </p>
            </section>

            <section className="team">
                <h2>Conoce a Nuestro Equipo</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="/img/testimonio2.png" alt="Jane Doe" />
                        <div className="team-info">
                            <h3>Jane Doe</h3>
                            <p><strong>Fundador y CEO</strong></p>
                            <p>Jane es la mente maestra detrás del proyecto. Con una vasta experiencia en periodismo y gestión de medios, su visión es construir una plataforma que destaque por su integridad y relevancia informativa.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="/img/testimonio3.png" alt="John Smith" />
                        <div className="team-info">
                            <h3>John Smith</h3>
                            <p><strong>Desarrollador Principal</strong></p>
                            <p>John es el experto técnico del equipo. Su pasión por la programación y la tecnología lo lleva a desarrollar soluciones innovadoras para asegurar que nuestro sitio web sea rápido, seguro y fácil de usar.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="/img/testimonio1.png" alt="Emily Johnson" />
                        <div className="team-info">
                            <h3>Emily Johnson</h3>
                            <p><strong>Directora de Contenidos</strong></p>
                            <p>Emily es la encargada de asegurar que el contenido de nuestro sitio web sea de alta calidad y esté bien investigado. Su experiencia en redacción y edición garantiza que cada noticia esté bien elaborada y sea de interés para nuestros lectores.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-vision">
                <div className="mission">
                    <h2>Nuestra Misión</h2>
                    <p>
                        Nuestra misión es proporcionar a nuestros usuarios un sitio web de noticias que sea una fuente confiable y oportuna de información. Nos esforzamos por ofrecer noticias relevantes y de alta calidad que enriquezcan la comprensión del mundo actual.
                    </p>
                </div>

                <div className="vision">
                    <h2>Nuestra Visión</h2>
                    <p>
                        Imaginamos un futuro en el que nuestra plataforma sea reconocida por su integridad y su capacidad para conectar a las personas con las noticias más importantes. Aspiramos a ser líderes en la industria de noticias digitales, ofreciendo contenido que inspire y eduque.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
