import express from 'express';
import usersController from '../controllers/users';
import authorize from '../middleware/authorize';
import { validateSignup, validateLogin } from '../helpers/validate';

const router = express.Router();
const userSignUpRequest = validateSignup();
const signinRequest = validateLogin();

router.get('/api/v1/users', usersController.getAllUsers);

router.post('/api/v1/auth/signup', usersController.signup);
router.post('/api/v1/auth/signin', usersController.signin);
router.put('/api/v1/users/:email/verify', usersController.UserIsVerified);

export default router;