import express from "express";
const academicsFieldRouter = express.Router();

import { getAllAcademicFields } from "../controllers/academicsFieldController.js";

academicsFieldRouter.route("/").get(getAllAcademicFields);

export { academicsFieldRouter };
