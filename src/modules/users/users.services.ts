import { TUser } from './users.interface';
import { UsersModel } from './users.model';

const createUser = async (user: TUser) => {
  const result = await UsersModel.create(user);
  return result;
};

const getUserList = async () => {
  const result = await UsersModel.aggregate([
    {
      $project: {
        _id: 0,
        username: 1,
        fullName: 1,
        email: 1,
        age: 1,
        address: 1,
      },
    },
  ]);
  return result;
};

const getUserById = async (userId: number) => {
  const result = await UsersModel.findOne(
    //findOne is a builtin instance method
    { userId },
    { password: 0, _id: 0, __v: 0 },
  );

  if (!result) {
    throw new Error('can not find user');
  }
  return result;
};

export const usersServices = {
  createUser,
  getUserList,
  getUserById,
};
