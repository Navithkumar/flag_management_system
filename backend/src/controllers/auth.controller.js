import bcrypt from 'bcryptjs';

import User from '../models/User.js';

import { generateToken } from '../utils/jwt.js';

import { errorResponse, successResponse } from '../utils/response.js';

export const signup = async (req, res) => {
    const { name, email, password, organizationId } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return errorResponse(res, {
            statusCode: 400,
            message: 'Email already exists',
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        organizationId,
    });

    return successResponse(res, {
        statusCode: 201,
        message: 'Signup successful',
        data: user,
    });
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return errorResponse(res, {
            statusCode: 401,
            message: 'Invalid credentials',
        });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        return errorResponse(res, {
            statusCode: 401,
            message: 'Invalid credentials',
        });
    }

    const token = generateToken({
        id: user._id,
        role: user.role,
        organizationId: user.organizationId,
    });

    return successResponse(res, {
        message: 'Login successful',
        data: {
            token,
        },
    });
};
