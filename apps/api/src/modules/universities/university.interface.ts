export interface IUniversity {
  // Basic Information
  name: string;
  shortName: string;
  code: string;

  // Contact Information
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
  primaryColor?: string;
  secondaryColor?: string;
  favicon?: string;

  // Academic Configuration
  gradingSystem: string;
  currentSession?: string;
  currentSemester?: string;

  // Subscription
  subscriptionPlan: string;
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;

  // Status
  isActive: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}