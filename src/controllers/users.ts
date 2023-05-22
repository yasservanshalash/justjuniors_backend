// controllers/user.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import UserServices from "../services/users";
import User from "../models/User";

dotenv.config()
export const createUserController = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const user = await UserServices.createUser(newUser);

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while creating the user" });
  }
};

export const loginUserController = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
  
      const user = await UserServices.getUserByUsername(username);
  
      if (!user) {
        res.status(401).json({ error: "Invalid username or password" });
        return;
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        res.status(401).json({ error: "Invalid username or password" });
        return;
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET as string);
  
      res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred while logging in" });
    }
  };
  

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await UserServices.getUserById(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching the user" });
  }
};


export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await UserServices.getAllUsers();

        res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while fetching the users" });
    }
}
export const updateUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const newData = req.body;
    const updatedUser = await UserServices.updateUser(userId, newData);

    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while updating the user" });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const deletedUser = await UserServices.deleteUser(userId);

    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while deleting the user" });
  }
};
