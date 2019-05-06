import express from 'express';
import userController from '../models/users';

const router = express.Router();

/**
 * User can create an account
 */

router.post('/signup', userController.signup);
/**
 * User can sign in
 */
router.post('/signin', userController.signin);

export default router;