import express from "express";
const postRouter = express.Router();

import {
  getAllPosts,
  createPosts,
  getSpecificPosts,
} from "../controllers/postController.js";

postRouter.route("/").get(getAllPosts).post(createPosts);
postRouter.route("/:id").get(getSpecificPosts);

export { postRouter };
