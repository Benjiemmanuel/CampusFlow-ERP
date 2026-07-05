import { GradingSystem } from "../../../shared/enums/grading-system.enum";
import { Semester } from "../../../shared/enums/semester.enum";
import { SubscriptionPlan } from "../../../shared/enums/subscription-plan.enum";

export interface CreateUniversityDto {
  // Basic
  name: string;
  shortName: string;
  code: string;

  // Contact
  email: string;
  phone: string;
  website?: string;

  // Address
  country: string;
  state: string;
  city: string;
  address: string;

  // Branding
  logo?: string;
  favicon?: string;

  primaryColor: string;
  secondaryColor: string;

  // Academic
  gradingSystem: GradingSystem;
  currentSession?: string;
  currentSemester?: Semester;

  // Subscription
  subscriptionPlan: SubscriptionPlan;
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
}