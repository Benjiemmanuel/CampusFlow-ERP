import { UniversityStatus } from "../../shared/enums/university-status.enum";

import { CreateUniversityDto } from "./dto/create-university.dto";

import universityRepository from "./university.repository";

class UniversityService {
  /**
   * Create University
   */
  async createUniversity(data: CreateUniversityDto) {
    // Check Email

    const existingEmail =
      await universityRepository.findByEmail(data.email);

    if (existingEmail) {
      throw new Error("University email already exists.");
    }

    // Check Code

    const existingCode =
      await universityRepository.findByCode(data.code);

    if (existingCode) {
      throw new Error("University code already exists.");
    }

    // Generate Slug

    const slug = data.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    // Create University

    return await universityRepository.create({
      ...data,

      slug,

      status: UniversityStatus.ACTIVE,

      isDeleted: false,
    });
  }

  /**
   * Get all universities
   */

  async getUniversities() {
    return await universityRepository.findAll();
  }

  /**
   * Get one university
   */

  async getUniversity(id: string) {
    return await universityRepository.findById(id);
  }
}

export default new UniversityService();