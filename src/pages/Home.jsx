import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Home.css';

const ALTERNATIVE_IMAGE_URL = '/img/found404.png';

// URL de las APIs
const TECHCRUNCH_API_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=badc9226002d435092cb0a44c001706a';
const CATEGORIES_API_URL = 'https://sandbox.academiadevelopers.com/infosphere/categories/';
const WSJ_API_URL = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=badc9226002d435092cb0a44c001706a';
const TESLA_NEWS_API_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2024-07-17&sortBy=publishedAt&apiKey=badc9226002d435092cb0a44c001706a';

const Home = () => {
    const [newsAcademia, setNewsAcademia] = useState([]);
    const [newsTechCrunch, setNewsTechCrunch] = useState([]);
    const [newsWSJ, setNewsWSJ] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newsTesla, setNewsTesla] = useState([]);
    const [loadingAcademia, setLoadingAcademia] = useState(true);
    const [loadingTechCrunch, setLoadingTechCrunch] = useState(true);
    const [loadingWSJ, setLoadingWSJ] = useState(true);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingTesla, setLoadingTesla] = useState(true);
    const [errorAcademia, setErrorAcademia] = useState(false);
    const [errorTechCrunch, setErrorTechCrunch] = useState(false);
    const [errorWSJ, setErrorWSJ] = useState(false);
    const [errorCategories, setErrorCategories] = useState(false);
    const [errorTesla, setErrorTesla] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Fetch de la API de Academia
                const responseAcademia = await fetch('https://sandbox.academiadevelopers.com/infosphere/articles/');
                if (!responseAcademia.ok) throw new Error('Error en la solicitud de Academia');
                const dataAcademia = await responseAcademia.json();
                setNewsAcademia(dataAcademia.results || []);
            } catch (error) {
                setErrorAcademia(true);
            } finally {
                setLoadingAcademia(false);
            }

            try {
                // Fetch de la API de TechCrunch
                const responseTechCrunch = await fetch(TECHCRUNCH_API_URL);
                if (!responseTechCrunch.ok) throw new Error('Error en la solicitud de TechCrunch');
                const dataTechCrunch = await responseTechCrunch.json();
                setNewsTechCrunch(dataTechCrunch.articles || []);
            } catch (error) {
                setErrorTechCrunch(true);
            } finally {
                setLoadingTechCrunch(false);
            }

            try {
                // Fetch de la API de Categorías
                const responseCategories = await fetch(CATEGORIES_API_URL);
                if (!responseCategories.ok) throw new Error('Error en la solicitud de Categorías');
                const dataCategories = await responseCategories.json();
                setCategories(dataCategories.results || []);
            } catch (error) {
                setErrorCategories(true);
            } finally {
                setLoadingCategories(false);
            }

            try {
                // Fetch de la API de Wall Street Journal
                const responseWSJ = await fetch(WSJ_API_URL);
                if (!responseWSJ.ok) throw new Error('Error en la solicitud de WSJ');
                const dataWSJ = await responseWSJ.json();
                setNewsWSJ(dataWSJ.articles || []);
            } catch (error) {
                setErrorWSJ(true);
            } finally {
                setLoadingWSJ(false);
            }

            try {
                // Fetch de la API de Tesla
                const responseTesla = await fetch(TESLA_NEWS_API_URL);
                if (!responseTesla.ok) throw new Error('Error en la solicitud de noticias de Tesla');
                const dataTesla = await responseTesla.json();
                setNewsTesla(dataTesla.articles || []);
            } catch (error) {
                setErrorTesla(true);
            } finally {
                setLoadingTesla(false);
            }
        };

        fetchNews();
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('search');
        setSearchQuery(query || '');
    }, [location.search]);

    const filteredNews = (news) => 
        news.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div className="home-container">
            <div className="home-title">Últimas Noticias de TechCrunch</div>
            {loadingTechCrunch && <div className="loading-message">Cargando noticias de TechCrunch...</div>}
            {errorTechCrunch && <div className="error-message">Hubo un error al cargar las noticias de TechCrunch.</div>}
            {!loadingTechCrunch && !errorTechCrunch && filteredNews(newsTechCrunch).length === 0 && <div className="no-news-message">No hay noticias de TechCrunch disponibles.</div>}
            <div className="news-grid">
                {filteredNews(newsTechCrunch).map((item) => (
                    <div key={item.url} className="news-card">
                        <img
                            src={item.urlToImage || ALTERNATIVE_IMAGE_URL}
                            alt={item.title}
                            className="news-image"
                        />
                        <div className="news-content">
                            <h2 className="news-title">{item.title}</h2>
                            <p className="news-excerpt">{item.description || 'Descripción no disponible'}</p>
                            <a href={item.url} className="news-link" target="_blank" rel="noopener noreferrer">Leer más</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Repite el bloque para WSJ, Tesla y Academia con el filtro aplicado */}

            <div className="home-title">Últimas Noticias de Wall Street Journal</div>
            {loadingWSJ && <div className="loading-message">Cargando noticias de WSJ...</div>}
            {errorWSJ && <div className="error-message">Hubo un error al cargar las noticias de WSJ.</div>}
            {!loadingWSJ && !errorWSJ && filteredNews(newsWSJ).length === 0 && <div className="no-news-message">No hay noticias de WSJ disponibles.</div>}
            <div className="news-grid">
                {filteredNews(newsWSJ).map((item) => (
                    <div key={item.url} className="news-card">
                        <img
                            src={item.urlToImage || ALTERNATIVE_IMAGE_URL}
                            alt={item.title}
                            className="news-image"
                        />
                        <div className="news-content">
                            <h2 className="news-title">{item.title}</h2>
                            <p className="news-excerpt">{item.description || 'Descripción no disponible'}</p>
                            <a href={item.url} className="news-link" target="_blank" rel="noopener noreferrer">Leer más</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-title">Últimas Noticias sobre Tesla</div>
            {loadingTesla && <div className="loading-message">Cargando noticias sobre Tesla...</div>}
            {errorTesla && <div className="error-message">Hubo un error al cargar las noticias sobre Tesla.</div>}
            {!loadingTesla && !errorTesla && filteredNews(newsTesla).length === 0 && <div className="no-news-message">No hay noticias sobre Tesla disponibles.</div>}
            <div className="news-grid">
                {filteredNews(newsTesla).map((item) => (
                    <div key={item.url} className="news-card">
                        <img
                            src={item.urlToImage || ALTERNATIVE_IMAGE_URL}
                            alt={item.title}
                            className="news-image"
                        />
                        <div className="news-content">
                            <h2 className="news-title">{item.title}</h2>
                            <p className="news-excerpt">{item.description || 'Descripción no disponible'}</p>
                            <a href={item.url} className="news-link" target="_blank" rel="noopener noreferrer">Leer más</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-title">Últimas Noticias de Academia</div>
            {loadingAcademia && <div className="loading-message">Cargando noticias de Academia...</div>}
            {errorAcademia && <div className="error-message">Hubo un error al cargar las noticias de Academia.</div>}
            {!loadingAcademia && !errorAcademia && filteredNews(newsAcademia).length === 0 && <div className="no-news-message">No hay noticias de Academia disponibles.</div>}
            <div className="news-grid">
                {filteredNews(newsAcademia).map((item) => (
                    <div key={item.id} className="news-card">
                        <img
                            src={item.image || ALTERNATIVE_IMAGE_URL}
                            alt={item.title}
                            className="news-image"
                        />
                        <div className="news-content">
                            <h2 className="news-title">{item.title}</h2>
                            <p className="news-excerpt">{item.abstract || 'Resumen no disponible'}</p>
                            <a href={`/noticia/${item.id}`} className="news-link">Leer más</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-title">Categorías de Noticias</div>
            {loadingCategories && <div className="loading-message">Cargando categorías...</div>}
            {errorCategories && <div className="error-message">Hubo un error al cargar las categorías.</div>}
            {!loadingCategories && !errorCategories && categories.length === 0 && <div className="no-news-message">No hay categorías disponibles.</div>}
            <div className="news-grid">
                {categories.map((category) => (
                    <div key={category.id} className="news-card">
                        <div className="news-content">
                            <h2 className="news-title">{category.name}</h2>
                            <p className="news-excerpt">{category.description || 'Descripción no disponible'}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="view-more-link">
                <a href="/noticias">Ver más noticias</a>
            </div>
        </div>
    );
};

export default Home;
