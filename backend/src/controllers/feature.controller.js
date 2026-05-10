import FeatureFlag from '../models/FeatureFlag.js';

import { errorResponse, successResponse } from '../utils/response.js';

export const createFeature = async (req, res) => {
    const { key, enabled } = req.body;

    const existingFeature = await FeatureFlag.findOne({
        key,
        organizationId: req.user.organizationId,
    });

    if (existingFeature) {
        return errorResponse(res, {
            statusCode: 400,
            message: 'Feature key already exists',
        });
    }

    const feature = await FeatureFlag.create({
        key,
        enabled,
        organizationId: req.user.organizationId,
        createdBy: req.user.id,
    });

    return successResponse(res, {
        statusCode: 201,
        message: 'Feature created successfully',
        data: feature,
    });
};

export const getFeatures = async (req, res) => {
    const features = await FeatureFlag.find({
        organizationId: req.user.organizationId,
    });

    return successResponse(res, {
        message: 'Features fetched successfully',
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
        {
            new: true,
        },
    );

    if (!feature) {
        return errorResponse(res, {
            statusCode: 404,
            message: 'Feature not found',
        });
    }

    return successResponse(res, {
        message: 'Feature updated successfully',
        data: feature,
    });
};

export const deleteFeature = async (req, res) => {
    const feature = await FeatureFlag.findOneAndDelete({
        _id: req.params.id,
        organizationId: req.user.organizationId,
    });

    if (!feature) {
        return errorResponse(res, {
            statusCode: 404,
            message: 'Feature not found',
        });
    }

    return successResponse(res, {
        message: 'Feature deleted successfully',
    });
};

export const checkFeature = async (req, res) => {
    const { organizationId, featureKey } = req.body;

    const feature = await FeatureFlag.findOne({
        organizationId,
        key: featureKey,
    });

    return successResponse(res, {
        message: 'Feature checked successfully',
        data: {
            enabled: feature?.enabled || false,
        },
    });
};
