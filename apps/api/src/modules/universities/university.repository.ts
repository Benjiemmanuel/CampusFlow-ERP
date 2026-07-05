import University from "./university.model";
import { IUniversity } from "./university.interface";

class UniversityRepository {
  async create(data: Partial<IUniversity>) {
    return University.create(data);
  }

  async findAll() {
    return University.find({ isDeleted: false });
  }

  async findById(id: string) {
    return University.findById(id);
  }

  async findByEmail(email: string) {
    return University.findOne({ email });
  }

  async findByCode(code: string) {
    return University.findOne({ code });
  }

  async update(id: string, data: Partial<IUniversity>) {
    return University.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string) {
    return University.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
        deletedAt: new Date(),
      },
      {
        new: true,
      }
    );
  }
}

export default new UniversityRepository();