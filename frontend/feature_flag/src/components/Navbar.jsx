import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <h2>Feature Flags</h2>

            <button className="btn btn-dark" onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
