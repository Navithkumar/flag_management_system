import { env } from '../config/env.js';
import Organization from '../models/Organization.js';

import { generateToken } from '../utils/jwt.js';

import { errorResponse, successResponse } from '../utils/response.js';

export const superAdminLogin = async (req, res) => {
    const { email, password } = req.body;

    if (email !== env.superAdminEmail || password !== env.superAdminPassword) {
        return errorResponse(res, {
            statusCode: 401,
            message: 'Invalid credentials',
        });
    }

    const token = generateToken({
        role: 'SUPER_ADMIN',
    });

    return successResponse(res, {
        message: 'Super admin login successful',
        data: {
            token,
        },
    });
};

export const createOrganization = async (req, res) => {
    const { name } = req.body;

    const organization = await Organization.create({ name });

    return res.status(201).json({
        success: true,
        data: organization,
    });
};

export const getOrganizations = async (req, res) => {
    const organizations = await Organization.find().sort({ createdAt: -1 });

    return res.json({
        success: true,
        data: organizations,
    });
};
