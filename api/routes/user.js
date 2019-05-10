import express from 'express';
import usersController from '../controllers/users';

const router = express.Router();

router.get('/api/v1/users', usersController.getAllUsers);

router.post('/api/v1/auth/signup', usersController.signup);
router.post('/api/v1/auth/signin', usersController.signin);
// router.put('/api/v1/user/:email/verify', usersController.users);

export default router;