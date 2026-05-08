import mongoose from 'mongoose';

export const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];

        return res.status(400).json({
            success: false,
            message: `${field} already exists`,
        });
    }

    if (err instanceof mongoose.Error.CastError) {
        return res.status(400).json({
            success: false,
            message: 'Invalid ID',
        });
    }

    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map((item) => item.message);

        return res.status(400).json({
            success: false,
            message: 'Validation Error',
            errors,
        });
    }

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

export default errorMiddleware;
