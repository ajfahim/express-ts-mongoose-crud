import express from 'express';
import { usersControllers } from './users.controller';

const router = express.Router();

router.post('/', usersControllers.createUser);
router.get('/', usersControllers.getUserList);
router.get('/:userId', usersControllers.getUserById);
router.put('/:userId', usersControllers.updateUserById);
router.delete('/:userId', usersControllers.deleteUserById);
router.put('/:userId/orders', usersControllers.createOrderByUserId);
router.get('/:userId/orders', usersControllers.getOrdersByUserId);
router.get(
  '/:userId/orders/total-price',
  usersControllers.getOrdersTotalPriceByUserId,
);

export const usersRoutes = router;
