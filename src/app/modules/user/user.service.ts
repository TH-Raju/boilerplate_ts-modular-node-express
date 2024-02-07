import { IUser } from "./user.interface";
import User from "./user.model";

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  user.fullName(); // custom instance method
  return user;
};

export const getUserByIdFromDB = async (
  payload: string | null
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, role: 1, email: 1 } //field filtering
  ).select("-password");
  return user;
};
