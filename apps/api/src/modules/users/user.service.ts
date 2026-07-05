import AppError from "../../shared/errors/AppError";

import { IUser } from "./user.interface";
import userRepository from "./user.repository";

class UserService {
  async createUser(data: IUser) {
    const existingUser =
      await userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new AppError(
        "Email already exists.",
        409
      );
    }

    return userRepository.create(data);
  }

  async getUsers() {
    return userRepository.findAll();
  }

  async getUser(id: string) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new AppError(
        "User not found.",
        404
      );
    }

    return user;
  }
}

export default new UserService();