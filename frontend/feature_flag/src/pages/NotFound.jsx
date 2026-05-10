import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-card">
                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>The page you are looking for does not exist.</p>

                <Link to="/" className="back-home-btn">
                    Back To Dashboard
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
