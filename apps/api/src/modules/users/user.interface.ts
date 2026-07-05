import { Gender } from "../../shared/enums/gender.enum";
import { UserRole } from "../../shared/enums/role.enum";
import { UserStatus } from "../../shared/enums/user-status.enum";

export interface IUser {
  firstName: string;

  lastName: string;

  middleName?: string;

  email: string;

  phoneNumber: string;

  password: string;

  gender: Gender;

  role: UserRole;

  status: UserStatus;

  universityId: string;

  employeeId?: string;

  matricNumber?: string;

  profileImage?: string;

  isEmailVerified: boolean;

  isPhoneVerified: boolean;

  lastLogin?: Date;

  createdAt?: Date;

  updatedAt?: Date;
}