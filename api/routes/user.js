import express from 'express';
<<<<<<< HEAD
import usersController from '../controllers/users';
import authorize from '../middleware/authorize';
import { validateSignup, validateLogin } from '../helpers/validate';
||||||| merged common ancestors
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userController from '../models/users';
import userModel from '../db/Users';

=======
import usersController from '../controllers/users';
>>>>>>> af93fe7da9c5e6a9df4597233edd31d1f40f7316

const router = express.Router();
const userSignUpRequest = validateSignup();
const signinRequest = validateLogin();

router.get('/api/v1/users', usersController.getAllUsers);

router.post('/api/v1/auth/signup', usersController.signup);
router.post('/api/v1/auth/signin', usersController.signin);
router.put('/api/v1/users/:email/verify', usersController.UserIsVerified);

export default router;