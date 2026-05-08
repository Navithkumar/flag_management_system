export const successResponse = (
    res,
    { statusCode = 200, message = 'Success', data = null },
) => {
    return res.status(statusCode).json({
        isV1 :true,
        success: true,
        message,
        data,
    });
};

export const errorResponse = (
    res,
    { statusCode = 500, message = 'Internal Server Error', errors = null },
) => {
    return res.status(statusCode).json({
        isV1 :true,
        success: false,
        message,
        errors,
    });
};
