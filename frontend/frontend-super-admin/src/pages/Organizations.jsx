import { useEffect, useState } from 'react';

import api from '../api/axios';

import DashboardLayout from '../layouts/DashboardLayout';

const Organizations = () => {
    const [organizations, setOrganizations] = useState([]);

    const [organizationName, setOrganizationName] = useState('');

    const [loading, setLoading] = useState(false);



    const fetchOrganizations = async () => {
        try {
            setLoading(true);

            const response = await api.get('/super-admin/organizations');

            setOrganizations(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrganizations();
    }, []);



    const createOrganization = async () => {
        if (!organizationName.trim()) {
            return alert('Organization name required');
        }

        try {
            await api.post('/super-admin/organizations', {
                name: organizationName,
            });

            setOrganizationName('');

            fetchOrganizations();
        } catch (error) {
            alert(
                error.response?.data?.message || 'Organization creation failed',
            );
        }
    };

    return (
        <DashboardLayout>
            <div className="dashboard-wrapper">
                <h1 className="dashboard-title">Organizations</h1>

                <div className="card shadow-sm p-4 mb-4">
                    <div className="row g-3">
                        <div className="col-md-9">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter organization name"
                                value={organizationName}
                                onChange={(e) =>
                                    setOrganizationName(e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-3">
                            <button
                                className="btn btn-dark w-100"
                                onClick={createOrganization}
                            >
                                Create Organization
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {organizations.map((org) => (
                        <div className="col-md-4 mb-4" key={org._id}>
                            <div className="card shadow-sm p-3">
                                <h4>{org.name}</h4>

                                <p className="text-muted small">
                                    Organization ID:
                                </p>

                                <code>{org._id}</code>
                            </div>
                        </div>
                    ))}
                </div>

                {loading && (
                    <div className="text-center py-4">
                        <div className="spinner-border text-dark" />
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Organizations;
