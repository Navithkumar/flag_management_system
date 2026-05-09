import FeatureFlag from '../models/FeatureFlag.js';

export const createFeature = async (req, res) => {
    const { key, enabled } = req.body;

    const feature = await FeatureFlag.create({
        key,
        enabled,
        organizationId: req.user.organizationId,
        createdBy: req.user.id,
    });

    return res.status(201).json({
        success: true,
        data: feature,
    });
};

export const getFeatures = async (req, res) => {
    const features = await FeatureFlag.find({
        organizationId: req.user.organizationId,
    });

    return res.json({
        success: true,
        data: features,
    });
};

export const updateFeature = async (req, res) => {
    const feature = await FeatureFlag.findOneAndUpdate(
        {
            _id: req.params.id,
            organizationId: req.user.organizationId,
        },
        req.body,
        { new: true },
    );

    return res.json({
        success: true,
        data: feature,
    });
};

export const deleteFeature = async (req, res) => {
    await FeatureFlag.findOneAndDelete({
        _id: req.params.id,
        organizationId: req.user.organizationId,
    });

    return res.json({
        success: true,
        message: 'Feature deleted',
    });
};

export const checkFeature = async (req, res) => {
    const { organizationId, featureKey } = req.body;

    const feature = await FeatureFlag.findOne({
        organizationId,
        key: featureKey,
    });

    return res.json({
        success: true,
        enabled: feature?.enabled || false,
    });
};
