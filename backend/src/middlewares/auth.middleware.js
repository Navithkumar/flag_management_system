import { verifyToken } from '../utils/jwt.js';

export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized',
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({
            success: false,
            message: 'Invalid token',
        });
    }
};
