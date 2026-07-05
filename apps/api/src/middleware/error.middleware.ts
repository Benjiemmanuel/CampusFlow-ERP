import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import AppError from "../shared/errors/AppError";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  if (error instanceof ZodError) {
    statusCode = 400;
    message = "Validation failed";
  }

  res.status(statusCode).json({
    success: false,
    message,
    error:
      process.env.NODE_ENV === "development"
        ? error
        : undefined,
  });
};

export default errorHandler;