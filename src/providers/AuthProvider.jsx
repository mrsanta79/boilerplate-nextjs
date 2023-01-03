import React, { useEffect, useLayoutEffect } from 'react';
import fetch from '@helpers/fetch';
import { useUser } from '@store';
import Router from 'next/router';

const AuthContext = React.createContext();

export const useAuthGuard = (middleware) => {
    const { token } = useUser();

    useLayoutEffect(() => {
        if(middleware === 'guest' && token) {
            Router.push('/dashboard');
            return;
        }
        if(middleware === 'auth' && token === null) {
            Router.push('/login');
            return;
        }
    }, []);
}

export const AuthProvider = ({ children }) => {
    const { token, user, clearToken, setUser } = useUser();

    useEffect(() => {
        getUserProfile();
    }, [token]);

    const getUserProfile = async () => {
        if(token === null) return null;

        try {
            const response = await fetch('/me');

            setUser(response);
        } catch (err) {
            if(err && err.response && err.response.status === 401) {
                clearToken(null, null);
            }
        }
    }

    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}