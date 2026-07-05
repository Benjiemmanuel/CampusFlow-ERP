import { GradingSystem } from "../../shared/enums/grading-system.enum";
import { Semester } from "../../shared/enums/semester.enum";
import { SubscriptionPlan } from "../../shared/enums/subscription-plan.enum";
import { UniversityStatus } from "../../shared/enums/university-status.enum";

export interface IUniversity {
  // Basic
  name: string;
  shortName: string;
  code: string;
  slug: string;

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

  // Status
  status: UniversityStatus;

  // Audit
  createdBy?: string;
  updatedBy?: string;

  isDeleted: boolean;
  deletedAt?: Date;

  createdAt?: Date;
  updatedAt?: Date;
}