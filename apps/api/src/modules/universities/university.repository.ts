import { IUniversity } from "./university.interface";
import { University } from "./university.model";

class UniversityRepository {
  /**
   * Create a new university
   */
  async create(data: Partial<IUniversity>) {
    return await University.create(data);
  }

  /**
   * Find by ID
   */
  async findById(id: string) {
    return await University.findById(id);
  }

  /**
   * Find by University Code
   */
  async findByCode(code: string) {
    return await University.findOne({ code });
  }

  /**
   * Find by Email
   */
  async findByEmail(email: string) {
    return await University.findOne({ email });
  }

  /**
   * Get All Universities
   */
  async findAll() {
    return await University.find().sort({
      createdAt: -1,
    });
  }

  /**
   * Update University
   */
  async update(id: string, data: Partial<IUniversity>) {
    return await University.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  /**
   * Delete University
   */
  async delete(id: string) {
    return await University.findByIdAndDelete(id);
  }
}

export default new UniversityRepository();