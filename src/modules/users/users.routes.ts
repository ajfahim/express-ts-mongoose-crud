import express from 'express';
import { usersControllers } from './users.controller';

const router = express.Router();

router.post('/', usersControllers.createUser);
router.get('/', usersControllers.getUserList);
router.get('/:userId', usersControllers.getUserById);

export const usersRoutes = router;
