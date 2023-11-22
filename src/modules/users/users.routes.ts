import express from 'express';
import { usersControllers } from './users.controler';

const router = express.Router();

router.post('/', usersControllers.createUser);

export const usersRoutes = router;
