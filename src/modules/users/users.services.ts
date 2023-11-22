import { TUser } from './users.interface';
import { UsersModel } from './users.model';

const createUser = async (user: TUser) => {
  const result = await UsersModel.create(user);
  return result;
};

export const usersServices = {
  createUser,
};
