import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import superAdminRoutes from './routes/superAdmin.routes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(morgan('dev'));
app.use('/api/auth', authRoutes);
app.use('/api/super-admin', superAdminRoutes);
app.use(errorMiddleware);

export default app;
