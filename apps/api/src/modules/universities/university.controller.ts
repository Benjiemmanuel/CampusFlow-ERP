import { Request, Response, NextFunction } from "express";
import universityService from "./university.service";
import { createUniversitySchema } from "./university.validation";

class UniversityController {
  /**
   * Create University
   */
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = createUniversitySchema.parse(req.body);

      const university =
        await universityService.createUniversity(data);

      return res.status(201).json({
        success: true,
        message: "University created successfully.",
        data: university,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Universities
   */
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const universities =
        await universityService.getUniversities();

      return res.status(200).json({
        success: true,
        data: universities,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get One University
   */
  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const university =
        await universityService.getUniversity(req.params.id as string);

      return res.status(200).json({
        success: true,
        data: university,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UniversityController();