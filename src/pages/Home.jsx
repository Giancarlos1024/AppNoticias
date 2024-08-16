import '../css/Home.css';

const Home = () => {
    // Puedes tener un estado para las noticias, cargando, etc.
    const loading = false;
    const error = false;
    const news = []; // Esto sería tu lista de noticias

    return (
        <div className="home-container">
            <div className="home-title">Últimas Noticias</div>
            
            {loading && <div className="loading-message">Cargando noticias...</div>}
            {error && <div className="error-message">Hubo un error al cargar las noticias.</div>}
            {!loading && !error && news.length === 0 && <div className="no-news-message">No hay noticias disponibles.</div>}

            <div className="news-grid">
                {/* Mapea tus noticias aquí */}
                <div className="news-card">
                    <img src="image-url.jpg" alt="Noticia 1" className="news-image" />
                    <div className="news-content">
                        <h2 className="news-title">Título de la Noticia 1</h2>
                        <p className="news-excerpt">Resumen breve de la noticia 1...</p>
                        <a href="/noticia-1" className="news-link">Leer más</a>
                    </div>
                </div>
                {/* Repite para otras noticias */}
            </div>

            <div className="view-more-link">
                <a href="/noticias">Ver más noticias</a>
            </div>
        </div>
    );
};

export default Home;
