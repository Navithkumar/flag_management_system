import { body } from 'express-validator';

export const createFeatureValidator = [
    body('key')
        .trim()
        .notEmpty()
        .withMessage('Feature key is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Feature key must be between 2 and 50 characters'),

    body('enabled').isBoolean().withMessage('Enabled must be boolean'),
];

export const updateFeatureValidator = [
    body('key')
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Feature key must be between 2 and 50 characters'),

    body('enabled')
        .optional()
        .isBoolean()
        .withMessage('Enabled must be boolean'),
];

export const checkFeatureValidator = [
    body('organizationId')
        .trim()
        .notEmpty()
        .withMessage('Organization ID is required')
        .isMongoId()
        .withMessage('Invalid organization ID'),

    body('featureKey').trim().notEmpty().withMessage('Feature key is required'),
];
