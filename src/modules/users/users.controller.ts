import { Request, Response } from 'express';
import { usersServices } from './users.services';
import userValidationSchema, {
  orderValidationSchema,
} from './users.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    //get data from body
    const { user: userData } = req.body;

    //data validation
    const zodParsedData = userValidationSchema.parse(userData);

    //   call service function
    const data = await usersServices.createUser(zodParsedData);

    // send response
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      error,
    });
  }
};

const getUserList = async (req: Request, res: Response) => {
  try {
    const data = await usersServices.getUserList();

    // send response
    res.status(200).json({
      success: true,
      message: 'Fetched data successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      error,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const data = await usersServices.getUserById(Number(userId));

    // send response
    res.status(200).json({
      success: true,
      message: 'Fetched data successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      //@ts-expect-error don't know the error type
      message: error.message || 'something went wrong!',
      error,
    });
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updatedData = req.body.user;

    //data validation
    const zodParsedData = userValidationSchema.parse(updatedData);

    const data = await usersServices.updateUserById(
      Number(userId),
      zodParsedData,
    );

    // send response
    res.status(200).json({
      success: true,
      message: 'Updated data successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      //@ts-expect-error don't know the error type
      message: error.message || 'something went wrong!',
      error,
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    await usersServices.deleteUserById(Number(userId));

    // send response
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      //@ts-expect-error don't know the error type
      message: error.message || 'something went wrong!',
      error,
    });
  }
};

const createOrderByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updatedData = req.body.order;

    //data validation
    const zodParsedData = orderValidationSchema.parse(updatedData);

    await usersServices.createOrderByUserId(Number(userId), zodParsedData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      //@ts-expect-error don't know the error type
      message: error.message || 'something went wrong!',
      error,
    });
  }
};

const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const data = await usersServices.getOrdersByUserId(Number(userId));

    // send response
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      //@ts-expect-error don't know the error type
      message: error.message || 'something went wrong!',
      error,
    });
  }
};

const getOrdersTotalPriceByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const data = await usersServices.getOrdersTotalPriceByUserId(
      Number(userId),
    );

    // send response
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      //@ts-expect-error don't know the error type
      message: error.message || 'something went wrong!',
      error,
    });
  }
};

export const usersControllers = {
  createUser,
  getUserList,
  getUserById,
  updateUserById,
  deleteUserById,
  createOrderByUserId,
  getOrdersByUserId,
  getOrdersTotalPriceByUserId,
};
