const FeatureCard = ({ feature, onToggle, onDelete }) => {
    return (
        <div className="feature-card">
            <div>
                <h3>{feature.key}</h3>

                <p>
                    Status:
                    {feature.enabled ? ' Enabled' : ' Disabled'}
                </p>
            </div>

            <div className="feature-actions">
                <button onClick={() => onToggle(feature)}>Toggle</button>

                <button onClick={() => onDelete(feature._id)}>Delete</button>
            </div>
        </div>
    );
};

export default FeatureCard;
