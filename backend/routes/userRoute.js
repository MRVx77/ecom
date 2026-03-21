import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getUserProfile,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/profile", getUserProfile);

userRouter.post("/forgot-password", forgotPassword)
userRouter.post("/reset-password/:token", resetPassword);

export default userRouter;
