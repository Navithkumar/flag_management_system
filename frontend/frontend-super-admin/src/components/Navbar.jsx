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
        <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3">
            <h3 className="m-0">Super Admin Panel</h3>

            <button className="btn btn-dark" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
};

export default Navbar;
