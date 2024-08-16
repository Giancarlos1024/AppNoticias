import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
// import '../css/ArticleDetail.css';

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (!token) {
            setError('No token found. Please log in.');
            setLoading(false);
            return;
        }

        fetch(`https://sandbox.academiadevelopers.com/infosphere/articles/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch article details.');
            }
            return response.json();
        })
        .then(data => {
            setArticle(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching article details:', error);
            setError(error.message || 'Failed to load article details.');
            setLoading(false);
        });
    }, [id, token]);

    if (loading) return <div>Loading article...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="article-detail">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetail;
