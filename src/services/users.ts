// services/user.ts
import { UserDocument } from "../models/User";
import User from "../models/User";

const createUser = async (userData: UserDocument): Promise<UserDocument> => {
  return User.create(userData);
};

const getUserById = async (userId: string): Promise<UserDocument | null> => {
  return User.findById(userId);
};

const getAllUsers = async (): Promise<UserDocument[] | null> => {
    return User.find();
};

const getUserByUsername = async (username: string): Promise<UserDocument | null> => {
  return User.findOne({ username });
};

const getUserByEmail = async (email: string): Promise<UserDocument | null> => {
  return User.findOne({ email });
};

const updateUser = async (userId: string, newData: Partial<UserDocument>): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(userId, newData, { new: true });
};

const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  return User.findByIdAndDelete(userId);
};

export default { createUser, getUserById, getAllUsers, getUserByUsername, getUserByEmail, updateUser, deleteUser };
