import { Request, Response } from "express";

import universityService from "./university.service";
import { createUniversitySchema } from "./university.validation";

import catchAsync from "../../shared/utils/catchAsync";
import sendResponse from "../../shared/responses/sendResponse";

class UniversityController {
  create = catchAsync(async (req: Request, res: Response) => {
    const data = createUniversitySchema.parse(req.body);

    const university = await universityService.createUniversity(data);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "University created successfully.",
      data: university,
    });
  });

  getAll = catchAsync(async (req: Request, res: Response) => {
    const universities = await universityService.getUniversities();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: universities,
    });
  });

  getById = catchAsync(async (req: Request, res: Response) => {
    const university = await universityService.getUniversity(
      req.params.id as string
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: university,
    });
  });
}

export default new UniversityController();