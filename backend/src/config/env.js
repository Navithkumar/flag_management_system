import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    superAdminEmail: process.env.SUPER_ADMIN_EMAIL,
    superAdminPassword: process.env.SUPER_ADMIN_PASSWORD,
};
