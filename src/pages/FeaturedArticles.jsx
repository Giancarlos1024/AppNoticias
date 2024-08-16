import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
// import '../css/FeaturedArticles.css';

const FeaturedArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (!token) {
            setError('No token found. Please log in.');
            setLoading(false);
            return;
        }

        fetch('https://sandbox.academiadevelopers.com/infosphere/featured-articles/', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch featured articles.');
            }
            return response.json();
        })
        .then(data => {
            setArticles(data.results || data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching featured articles:', error);
            setError(error.message || 'Failed to load articles.');
            setLoading(false);
        });
    }, [token]);

    if (loading) return <div>Loading featured articles...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="featured-articles">
            <h1>Featured Articles</h1>
            <ul>
                {articles.length === 0 ? (
                    <p>No featured articles available.</p>
                ) : (
                    articles.map(article => (
                        <li key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.summary}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default FeaturedArticles;
