import { Router } from 'express';
const router = Router();

import { register, login, updateUser } from '../controllers/authController.js';
import authMiddleware from '../middleware/auth.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(authMiddleware, updateUser);

export default router;
