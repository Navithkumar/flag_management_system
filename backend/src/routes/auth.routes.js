import express from 'express';

import { login, signup } from '../controllers/auth.controller.js';

import {
    loginValidator,
    signupValidator,
} from '../validators/auth.validator.js';

import { validate } from '../middlewares/validate.middleware.js';

import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();

router.post('/signup', signupValidator, validate, asyncHandler(signup));
router.post('/login', loginValidator, validate, asyncHandler(login));

export default router;
