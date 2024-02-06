import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assurez-vous que le chemin est correct

export const PrivateRoute = () => {
    const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
};
