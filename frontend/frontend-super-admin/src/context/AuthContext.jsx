import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('super_admin_token');

        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('super_admin_token', token);

        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem('super_admin_token');

        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
