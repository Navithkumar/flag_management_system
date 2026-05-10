const Button = ({ children, onClick, type = 'button', loading = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading}
            className="button"
        >
            {loading ? 'Loading...' : children}
        </button>
    );
};

export default Button;
