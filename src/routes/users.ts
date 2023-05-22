// routes/user.ts
import { Router } from "express";
import {
  createUserController,
  loginUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  getAllUsersController
} from "../controllers/users";

const router = Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
