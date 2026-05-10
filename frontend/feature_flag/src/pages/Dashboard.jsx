import { useEffect, useState } from 'react';

import api from '../api/axios';

import DashboardLayout from '../layouts/DashboardLayout';

const Dashboard = () => {
    const [features, setFeatures] = useState([]);

    const [featureKey, setFeatureKey] = useState('');

    const [loading, setLoading] = useState(false);

    const fetchFeatures = async () => {
        try {
            setLoading(true);

            const response = await api.get('/features');

            setFeatures(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFeatures();
    }, []);

    const createFeature = async () => {
        if (!featureKey.trim()) {
            return alert('Feature key required');
        }

        try {
            await api.post('/features', {
                key: featureKey,
                enabled: true,
            });

            setFeatureKey('');

            fetchFeatures();
        } catch (error) {
            alert(error.response?.data?.message || 'Feature creation failed');
        }
    };

    const toggleFeature = async (feature) => {
        try {
            await api.put(`/features/${feature._id}`, {
                enabled: !feature.enabled,
            });

            fetchFeatures();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteFeature = async (id) => {
        try {
            await api.delete(`/features/${id}`);

            fetchFeatures();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <DashboardLayout>
            <div className="dashboard-wrapper">
                <h1 className="dashboard-title">Feature Dashboard</h1>

                <div className="card shadow-sm p-4 feature-form-card">
                    <div className="row g-3">
                        <div className="col-md-9">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter feature key"
                                value={featureKey}
                                onChange={(e) => setFeatureKey(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3">
                            <button
                                className="btn btn-dark w-100"
                                onClick={createFeature}
                            >
                                Create Feature
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row feature-grid">
                    {features.map((feature) => (
                        <div className="col-md-4 mb-4" key={feature._id}>
                            <div className="card shadow-sm feature-card p-3">
                                <h3 className="feature-title">{feature.key}</h3>

                                <p className="feature-status">
                                    Status:
                                    <span
                                        className={
                                            feature.enabled
                                                ? 'status-enabled'
                                                : 'status-disabled'
                                        }
                                    >
                                        {feature.enabled
                                            ? ' Enabled'
                                            : ' Disabled'}
                                    </span>
                                </p>

                                <div className="feature-actions">
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => toggleFeature(feature)}
                                    >
                                        Toggle
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            deleteFeature(feature._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {loading && (
                    <div className="loader-wrapper">
                        <div className="spinner-border text-dark" />
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
