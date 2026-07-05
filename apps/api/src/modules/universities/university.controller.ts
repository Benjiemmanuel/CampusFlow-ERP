import { Request, Response } from "express";

import universityService from "./university.service";
import { createUniversitySchema } from "./university.validation";

import catchAsync from "../../shared/utils/catchAsync";
import sendResponse from "../../shared/responses/sendResponse";

class UniversityController {
  /**
   * Create University
   */
  create = catchAsync(async (req: Request, res: Response) => {
    const data = createUniversitySchema.parse(req.body);

    const university =
      await universityService.createUniversity(data);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "University created successfully.",
      data: university,
    });
  });

  /**
   * Get All Universities
   */
  getAll = catchAsync(async (req: Request, res: Response) => {
    const universities =
      await universityService.getUniversities();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: universities,
    });
  });

  /**
   * Get University By ID
   */
  getById = catchAsync(async (req: Request, res: Response) => {
    const id = String(req.params.id);

    const university =
      await universityService.getUniversity(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: university,
    });
  });
}

export default new UniversityController();