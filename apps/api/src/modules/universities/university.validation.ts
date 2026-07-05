import { z } from "zod";

import { GradingSystem } from "../../shared/enums/grading-system.enum";
import { SubscriptionPlan } from "../../shared/enums/subscription-plan.enum";
import { UniversityStatus } from "../../shared/enums/university-status.enum";
import { Semester } from "../../shared/enums/semester.enum";

export const createUniversitySchema = z.object({
  name: z.string().min(3).max(200),

  shortName: z.string().min(2).max(50),

  code: z.string().min(2).max(20),

  email: z.email(),

  phone: z.string().min(7).max(20),

  website: z.string().url().optional(),

  country: z.string(),

  state: z.string(),

  city: z.string(),

  address: z.string(),

  logo: z.string().optional(),

  favicon: z.string().optional(),

  primaryColor: z.string().default("#2563EB"),

  secondaryColor: z.string().default("#0F172A"),

  gradingSystem: z.enum(GradingSystem),

  currentSession: z.string().optional(),

  currentSemester: z.enum(Semester).optional(),

  subscriptionPlan: z.enum(SubscriptionPlan),

  subscriptionStartDate: z.coerce.date().optional(),

  subscriptionEndDate: z.coerce.date().optional(),

  status: z.enum(UniversityStatus).default(UniversityStatus.ACTIVE),
});

export type CreateUniversityInput =
  z.infer<typeof createUniversitySchema>;