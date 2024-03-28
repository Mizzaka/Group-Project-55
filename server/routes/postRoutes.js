import express from "express";
const postRouter = express.Router();

import {
  getAllPosts,
  createPosts,
  getSpecificPosts,
  deleteSpecificPost
} from "../controllers/postController.js";

postRouter.route("/").get(getAllPosts).post(createPosts);
postRouter.route("/:id").get(getSpecificPosts).delete(deleteSpecificPost);

export { postRouter };
