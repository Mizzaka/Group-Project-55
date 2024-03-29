import express from "express";
const userRoutes = express.Router();

import { getAllUsers, deleteUser, signUp, login } from "../controllers/userController.js";

userRoutes.route("/").get(getAllUsers)
userRoutes.route("/signup").post(signUp)
userRoutes.route("/login").post(login)
userRoutes.route("/:id").delete(deleteUser)

export { userRoutes };