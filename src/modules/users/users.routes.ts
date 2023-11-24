import express from 'express';
import { usersControllers } from './users.controller';

const router = express.Router();

router.post('/', usersControllers.createUser);
router.get('/', usersControllers.getUserList);
router.get('/:userId', usersControllers.getUserById);
router.put('/:userId', usersControllers.updateUserById);
router.delete('/:userId', usersControllers.deleteUserById);

export const usersRoutes = router;
