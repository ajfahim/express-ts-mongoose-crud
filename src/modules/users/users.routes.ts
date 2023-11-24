import express from 'express';
import { usersControllers } from './users.controller';

const router = express.Router();

router.post('/', usersControllers.createUser);
router.get('/', usersControllers.getUserList);

export const usersRoutes = router;
