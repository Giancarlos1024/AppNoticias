import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ResourceDetail = () => {
    const { resource, id } = useParams();
    const [details, setDetails] = useState(null);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (!token) return;

        fetch(`https://sandbox.academiadevelopers.com/infosphere/${resource}/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch details.');
            return response.json();
        })
        .then(data => setDetails(data))
        .catch(error => console.error('Error fetching details:', error));
    }, [token, resource, id]);

    if (!details) return <div>Loading...</div>;

    return (
        <div>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
            {/* Agrega más detalles aquí */}
        </div>
    );
};

export default ResourceDetail;
