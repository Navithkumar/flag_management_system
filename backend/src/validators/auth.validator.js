import { body } from 'express-validator';

export const signupValidator = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email')
        .normalizeEmail(),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters')
        .matches(/[A-Z]/)
        .withMessage('Password must contain one uppercase letter')
        .matches(/[a-z]/)
        .withMessage('Password must contain one lowercase letter')
        .matches(/[0-9]/)
        .withMessage('Password must contain one number'),

    body('organizationId')
        .trim()
        .notEmpty()
        .withMessage('Organization ID is required')
        .isMongoId()
        .withMessage('Invalid organization ID'),
];

export const loginValidator = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email')
        .normalizeEmail(),

    body('password').trim().notEmpty().withMessage('Password is required'),
];

export const superAdminLoginValidator = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email'),

    body('password').trim().notEmpty().withMessage('Password is required'),
];
