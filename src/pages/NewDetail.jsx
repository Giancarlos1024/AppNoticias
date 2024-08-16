import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/NewDetail.css'; // Asegúrate de agregar estilos adicionales aquí

const NewDetail = () => {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Aquí usamos un índice para buscar la noticia en la lista de noticias que se obtuvo
        // en lugar de hacer un fetch a una API externa para detalles.
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-07-16&sortBy=publishedAt&apiKey=badc9226002d435092cb0a44c001706a')
            .then(response => response.json())
            .then(data => {
                const article = data.articles[id]; // Obtener la noticia por índice
                setNewsItem(article);
            })
            .catch(error => console.error('Error fetching news details:', error));
    }, [id]);

    if (!newsItem) return <div>Loading...</div>;

    return (
        <div className="news-detail">
            <h1>{newsItem.title}</h1>
            <img src={newsItem.urlToImage || 'https://via.placeholder.com/600x400'} alt={newsItem.title} className="news-image" />
            <p>{newsItem.content}</p>
            <div className="news-actions">
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        </div>
    );
};

export default NewDetail;
