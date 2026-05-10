import { useState } from 'react';

import api from '../api/axios';

const Home = () => {
    const [organizationId, setOrganizationId] = useState('');

    const [featureKey, setFeatureKey] = useState('');

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const checkFeature = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await api.post('/features/check', {
                organizationId,
                featureKey,
            });

            setResult(response.data.data.enabled);
        } catch (error) {
            alert(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home-wrapper d-flex justify-content-center align-items-center">
            <div className="card shadow checker-card p-4">
                <h2 className="text-center mb-4">Feature Checker</h2>

                <form onSubmit={checkFeature}>
                    <div className="mb-3">
                        <label className="form-label">Organization ID</label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter organization ID"
                            value={organizationId}
                            onChange={(e) => setOrganizationId(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Feature Key</label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="dark_mode"
                            value={featureKey}
                            onChange={(e) => setFeatureKey(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark w-100"
                        disabled={loading}
                    >
                        {loading ? 'Checking...' : 'Check Feature'}
                    </button>
                </form>

                {result !== null && (
                    <div
                        className={`result-box mt-4 ${
                            result ? 'result-enabled' : 'result-disabled'
                        }`}
                    >
                        {result ? '✅ Feature Enabled' : '❌ Feature Disabled'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
