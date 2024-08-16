import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'; // Asegúrate de tener este archivo de CSS

const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reemplaza 'YOUR_API_KEY' con tu clave de API real de NewsAPI
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-07-16&sortBy=publishedAt&apiKey=badc9226002d435092cb0a44c001706a')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setNews(data.articles);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    console.log("datos : ", news)
    if (loading) return <div className="loading-message">Cargando noticias...</div>;
    if (error) return <div className="error-message">Error cargando noticias: {error.message}</div>;

    return (
        <div className="home-container">
            <h1 className="home-title">Últimas Noticias</h1>
            <div className="news-grid">
                {news.length === 0 ? (
                    <p className="no-news-message">No hay noticias disponibles.</p>
                ) : (
                    news.map((newsItem, index) => (
                        <div className="news-card" key={newsItem.url || index}>
                            <img 
                                src={newsItem.urlToImage || 'https://via.placeholder.com/300'} 
                                alt={newsItem.title || 'Imagen de noticia'} 
                                className="news-image" 
                            />
                            <div className="news-content">
                                <h2 className="news-title">{newsItem.title}</h2>
                                <p className="news-excerpt">{newsItem.description}</p>
                                <Link to={`/news/${index}`} className="news-link">Leer más</Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
