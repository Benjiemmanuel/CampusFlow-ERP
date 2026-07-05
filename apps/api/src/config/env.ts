import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 5000,

  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/campusflow",

  JWT_ACCESS_SECRET:
    process.env.JWT_ACCESS_SECRET || "access_secret",

  JWT_REFRESH_SECRET:
    process.env.JWT_REFRESH_SECRET || "refresh_secret",
};