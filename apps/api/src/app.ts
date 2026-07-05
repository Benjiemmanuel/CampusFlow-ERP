import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import universityRoutes from "./modules/universities/university.routes";

const app = express();

/**
 * Global Middleware
 */
app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

/**
 * Health Check
 */
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CampusFlow ERP API is running successfully 🚀",
    version: "1.0.0",
  });
});

/**
 * API Routes
 */
app.use("/api/v1/universities", universityRoutes);

export default app;