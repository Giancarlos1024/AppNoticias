import React, { useEffect, useState, useContext } from 'react';
import '../css/Categories.css';
import Modal from './Modal'; 
import NewsForm from '../components/NewsForm'; 
import { AuthContext } from '../contexts/AuthContext';

const Categories = () => {
    const [news, setNews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNewsId, setEditingNewsId] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const storedNews = JSON.parse(localStorage.getItem('news')) || [];
        setNews(storedNews);
    }, []);

    const handleDelete = (id) => {
        const updatedNews = news.filter(item => item.id !== id);
        setNews(updatedNews);
        localStorage.setItem('news', JSON.stringify(updatedNews));
    };

    const handleEdit = (id) => {
        setEditingNewsId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingNewsId(null);
    };

    return (
        <div className="categories-tags-reactions">
            <h1>Categorías</h1>
            <div className="news-list">
                {news.map((item) => (
                    <div key={item.id} className="news-item">
                        {item.image && (
                            <div className="image-container">
                                <img src={item.image} alt={item.title} className="news-image" />
                            </div>
                        )}
                        <h2 className='tituloPublicacion'>{item.title}</h2>
                        <p><strong>Categoría:</strong> {item.category}</p>
                        <p>{item.content}</p>
                        <p><strong>Fecha:</strong> {item.date}</p>
                        <p><strong>Autor:</strong> {item.author}</p>
                        {console.log("url directa : ", item.image)}
                        
                        
                        {user && ( 
                            <div className="buttons">
                                <button onClick={() => handleEdit(item.id)} className="edit-button">
                                    Editar
                                </button>
                                <button onClick={() => handleDelete(item.id)} className="delete-button">
                                    Eliminar
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <NewsForm newsId={editingNewsId} onSave={handleCloseModal} />
            </Modal>
        </div>
    );
};

export default Categories;
