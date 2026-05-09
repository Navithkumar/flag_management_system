import express from 'express';

import {
    checkFeature,
    createFeature,
    deleteFeature,
    getFeatures,
    updateFeature,
} from '../controllers/feature.controller.js';

import {
    checkFeatureValidator,
    createFeatureValidator,
    updateFeatureValidator,
} from '../validators/feature.validator.js';

import { authenticate } from '../middlewares/auth.middleware.js';

import { authorize } from '../middlewares/role.middleware.js';

import { validate } from '../middlewares/validate.middleware.js';

import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();


router.post(
    '/',
    authenticate,
    authorize('ORG_ADMIN'),
    createFeatureValidator,
    validate,
    asyncHandler(createFeature),
);



router.get(
    '/',
    authenticate,
    authorize('ORG_ADMIN'),
    asyncHandler(getFeatures),
);



router.put(
    '/:id',
    authenticate,
    authorize('ORG_ADMIN'),
    updateFeatureValidator,
    validate,
    asyncHandler(updateFeature),
);



router.delete(
    '/:id',
    authenticate,
    authorize('ORG_ADMIN'),
    asyncHandler(deleteFeature),
);


router.post(
    '/check',
    checkFeatureValidator,
    validate,
    asyncHandler(checkFeature),
);

export default router;
