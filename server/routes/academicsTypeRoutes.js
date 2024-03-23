import express from "express";
const academicsTypeRouter = express.Router();

import { getAllAcademicTypes } from "../controllers/academicsTypeController.js";

academicsTypeRouter.route("/").get(getAllAcademicTypes);

export { academicsTypeRouter };
