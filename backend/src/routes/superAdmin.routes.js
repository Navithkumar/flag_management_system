import express from 'express';

import {
    createOrganization,
    getOrganizations,
    superAdminLogin,
} from '../controllers/superAdmin.controller.js';

import { superAdminLoginValidator } from '../validators/auth.validator.js';

import { authenticate } from '../middlewares/auth.middleware.js';

import { authorize } from '../middlewares/role.middleware.js';

import { validate } from '../middlewares/validate.middleware.js';

import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();

router.post(
    '/login',
    superAdminLoginValidator,
    validate,
    asyncHandler(superAdminLogin),
);

router.post(
    '/organizations',
    authenticate,
    authorize('SUPER_ADMIN'),
    asyncHandler(createOrganization),
);

router.get(
    '/organizations',
    authenticate,
    authorize('SUPER_ADMIN'),
    asyncHandler(getOrganizations),
);

export default router;
