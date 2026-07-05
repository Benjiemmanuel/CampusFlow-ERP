import { IUniversity } from "./university.interface";
import { University } from "./university.model";

class UniversityRepository {
  async create(data: Partial<IUniversity>) {
    return await University.create(data);
  }

  async findById(id: string) {
    return await University.findById(id);
  }

  async findByEmail(email: string) {
    return await University.findOne({ email });
  }

  async findByCode(code: string) {
    return await University.findOne({ code });
  }

  async findAll() {
    return await University.find().sort({
      createdAt: -1,
    });
  }

  async update(id: string, data: Partial<IUniversity>) {
    return await University.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id: string) {
    return await University.findByIdAndDelete(id);
  }
}

export default new UniversityRepository();