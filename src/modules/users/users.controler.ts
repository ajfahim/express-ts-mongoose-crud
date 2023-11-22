import { Request, Response } from 'express';
import { usersServices } from './users.services';

const createUser = async (req: Request, res: Response) => {
  try {
    //get data from body
    const { user: userData } = req.body;

    //   call service function
    const data = await usersServices.createUser(userData);

    // send response
    res.status(200).json({
      success: true,
      message: 'created user successfully',
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      error: {
        code: 500,
        description: 'something went wrong!',
      },
    });
  }
};

export const usersControllers = {
  createUser,
};
