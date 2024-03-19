import express from "express";
const universityRouter = express.Router();

import {
  getAllUnivesities,
  createUniversity,
  getSpecificUniversity,
} from "../controllers/universityController.js";

universityRouter.route("/").get(getAllUnivesities).post(createUniversity);
universityRouter.route("/:id").get(getSpecificUniversity);

export { universityRouter };
