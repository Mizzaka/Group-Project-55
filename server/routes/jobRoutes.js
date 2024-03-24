import express from "express";
const jobRouter = express.Router();

import {
  getAllJobs,
  createJob,
  getSpecificJob,
} from "../controllers/jobController.js";

jobRouter.route("/").get(getAllJobs).post(createJob);
jobRouter.route("/:id").get(getSpecificJob);

export { jobRouter };
