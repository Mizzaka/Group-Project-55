import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// Custom Routing
import { universityRouter } from "./routes/universityRoutes.js";
import { academicsRouter } from "./routes/academicsRoutes.js";
import { postRouter } from "./routes/postRoutes.js";
import { academicsTypeRouter } from "./routes/academicsTypeRoutes.js";
import { academicsFieldRouter } from "./routes/academicsFieldRoutes.js";
import { jobRouter } from "./routes/jobRoutes.js";

// Instances
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// API Endpoints
app.use("/api/v1/university", universityRouter)
app.use("/api/v1/academics", academicsRouter)
app.use("/api/v1/posts", postRouter)
app.use("/api/v1/academicTypes", academicsTypeRouter)
app.use("/api/v1/academicsField", academicsFieldRouter)
app.use("/api/v1/job", jobRouter)

const port = process.env.PORT || 9000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();

