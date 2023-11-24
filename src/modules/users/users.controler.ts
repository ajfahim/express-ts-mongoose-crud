import { Request, Response } from 'express';
import { usersServices } from './users.services';
import userValidationSchema from './users.validation';

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

export const usersControllers = {
  createUser,
};
