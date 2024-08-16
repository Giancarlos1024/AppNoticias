import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
// import '../css/Search.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);

    const handleSearch = (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (!token) {
            setError('No token found. Please log in.');
            setLoading(false);
            return;
        }

        fetch(`https://sandbox.academiadevelopers.com/infosphere/search/?q=${query}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch search results.');
            }
            return response.json();
        })
        .then(data => {
            setResults(data.results || data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
            setError(error.message || 'Failed to load search results.');
            setLoading(false);
        });
    };

    return (
        <div className="search">
            <h1>Search Articles</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ul>
                {results.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    results.map(result => (
                        <li key={result.id}>
                            <h2>{result.title}</h2>
                            <p>{result.summary}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Search;
