import { z } from "zod";

import { Gender } from "../../shared/enums/gender.enum";
import { UserRole } from "../../shared/enums/role.enum";
import { UserStatus } from "../../shared/enums/user-status.enum";

export const createUserSchema = z.object({
  firstName: z.string().min(2),

  lastName: z.string().min(2),

  middleName: z.string().optional(),

  email: z.email(),

  phoneNumber: z.string().min(10),

  password: z.string().min(8),

  gender: z.enum(Gender),

  role: z.enum(UserRole).optional(),

  status: z.enum(UserStatus).optional(),

  universityId: z.string(),

  isEmailVerified: z.boolean().optional(),
});