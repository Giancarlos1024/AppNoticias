import React, { useState, useEffect } from 'react';
import '../css/NewForm.css'; 

const NewsForm = ({ newsId, onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (newsId) {
            const newsList = JSON.parse(localStorage.getItem('news')) || [];
            const newsItem = newsList.find(news => news.id === newsId);
            if (newsItem) {
                setTitle(newsItem.title);
                setContent(newsItem.content);
                setDate(newsItem.date);
                setAuthor(newsItem.author);
                setImage(newsItem.image);
                setCategory(newsItem.category);
            }
        }
    }, [newsId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newsData = {
            title,
            content,
            date,
            author,
            image,
            category
        };

        const newsList = JSON.parse(localStorage.getItem('news')) || [];

        if (newsId) {
            const index = newsList.findIndex(news => news.id === newsId);
            if (index !== -1) {
                newsList[index] = { ...newsData, id: newsId };
            }
        } else {
            const newId = Date.now();
            newsList.push({ ...newsData, id: newId });
        }

        localStorage.setItem('news', JSON.stringify(newsList));

        if (onSave) {
            onSave();
        }

        // Limpiar el formulario
        setTitle('');
        setContent('');
        setDate('');
        setAuthor('');
        setImage('');
        setCategory('');

        // Alerta de éxito
        alert('Noticia guardada exitosamente!');
    };

    return (
        <form onSubmit={handleSubmit} className="news-form">
            <h2>{newsId ? 'Editar Noticia' : 'Nueva Noticia'}</h2>
            {/* Campos del formulario */}
            <label htmlFor="title">Título:</label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título"
                required
            />
            
            <label htmlFor="content">Contenido:</label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Contenido"
                required
            />
            
            <label htmlFor="date">Fecha:</label>
            <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            
            <label htmlFor="author">Autor:</label>
            <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Autor"
            />
            
            <label htmlFor="image">URL de Imagen:</label>
            <input
                id="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="URL de Imagen"
            />
            
            <label htmlFor="category">Categoría:</label>
            <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categoría"
            />
            
            <button type="submit" className="submit-button">Guardar</button>
        </form>
    );
};

export default NewsForm;
