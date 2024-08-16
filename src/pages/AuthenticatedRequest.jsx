import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AuthenticatedRequest = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <div>You need to be logged in to view this page.</div>;
    }

    return <>{children}</>;
};

export default AuthenticatedRequest;
