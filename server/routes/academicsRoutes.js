import express from "express";
const academicsRouter = express.Router();

import {
  getAllAcademics,
  createAcademics,
  getSpecificAcademics,
} from "../controllers/academicsController.js";

academicsRouter.route("/").get(getAllAcademics).post(createAcademics);
academicsRouter.route("/:id").get(getSpecificAcademics);

export { academicsRouter };
