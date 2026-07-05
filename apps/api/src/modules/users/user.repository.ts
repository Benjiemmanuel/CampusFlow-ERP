import User from "./user.model";
import { IUser } from "./user.interface";

class UserRepository {
  async create(data: IUser) {
    return User.create(data);
  }

  async findByEmail(email: string) {
    return User.findOne({ email }).select("+password");
  }

  async findById(id: string) {
    return User.findById(id);
  }

  async findAll() {
    return User.find();
  }

  async update(id: string, data: Partial<IUser>) {
    return User.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id: string) {
    return User.findByIdAndDelete(id);
  }
}

export default new UserRepository();