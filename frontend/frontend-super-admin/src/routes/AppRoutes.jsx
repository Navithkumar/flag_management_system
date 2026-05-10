import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';

import Organizations from '../pages/Organizations';

import NotFound from '../pages/NotFound';

import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Organizations />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
