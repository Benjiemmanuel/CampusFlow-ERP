import { IUniversity } from "./university.interface";
import universityRepository from "./university.repository";

class UniversityService {
  /**
   * Create University
   */
  async createUniversity(data: Partial<IUniversity>) {
    // Check email
    const existingEmail = await universityRepository.findByEmail(data.email!);

    if (existingEmail) {
      throw new Error("University email already exists.");
    }

    // Check code
    const existingCode = await universityRepository.findByCode(data.code!);

    if (existingCode) {
      throw new Error("University code already exists.");
    }

    // Generate slug
    const slug = data.name!
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    return await universityRepository.create({
      ...data,
      slug,
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