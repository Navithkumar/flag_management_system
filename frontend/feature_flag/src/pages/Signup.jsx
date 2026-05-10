import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import api from '../api/axios';

const Signup = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        organizationId: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await api.post('/auth/signup', formData);

            alert('Signup successful');

            navigate('/login');
        } catch (error) {
            alert(error.response?.data?.message || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-wrapper d-flex justify-content-center align-items-center">
            <div className="card shadow auth-card p-4">
                <h2 className="text-center mb-4">Admin Signup</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>

                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>

                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Organization ID</label>

                        <input
                            type="text"
                            name="organizationId"
                            className="form-control"
                            placeholder="Enter organization ID"
                            value={formData.organizationId}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark w-100"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Signup'}
                    </button>

                    <p className="text-center mt-3">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
