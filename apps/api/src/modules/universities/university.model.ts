import { Schema, model } from "mongoose";

import { IUniversity } from "./university.interface";

import { GradingSystem } from "../../shared/enums/grading-system.enum";
import { Semester } from "../../shared/enums/semester.enum";
import { SubscriptionPlan } from "../../shared/enums/subscription-plan.enum";
import { UniversityStatus } from "../../shared/enums/university-status.enum";

const universitySchema = new Schema<IUniversity>(
  {
    // ==========================
    // Basic Information
    // ==========================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    shortName: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // ==========================
    // Contact
    // ==========================

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    website: {
      type: String,
    },

    // ==========================
    // Address
    // ==========================

    country: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    // ==========================
    // Branding
    // ==========================

    logo: {
      type: String,
    },

    favicon: {
      type: String,
    },

    primaryColor: {
      type: String,
      default: "#2563EB",
    },

    secondaryColor: {
      type: String,
      default: "#0F172A",
    },

    // ==========================
    // Academic
    // ==========================

    gradingSystem: {
      type: String,
      enum: Object.values(GradingSystem),
      default: GradingSystem.FIVE_POINT,
    },

    currentSession: {
      type: String,
    },

    currentSemester: {
      type: String,
      enum: Object.values(Semester),
    },

    // ==========================
    // Subscription
    // ==========================

    subscriptionPlan: {
      type: String,
      enum: Object.values(SubscriptionPlan),
      default: SubscriptionPlan.FREE_TRIAL,
    },

    subscriptionStartDate: {
      type: Date,
    },

    subscriptionEndDate: {
      type: Date,
    },

    // ==========================
    // Status
    // ==========================

    status: {
      type: String,
      enum: Object.values(UniversityStatus),
      default: UniversityStatus.ACTIVE,
    },

    // ==========================
    // Audit
    // ==========================

    createdBy: {
      type: String,
    },

    updatedBy: {
      type: String,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const University = model<IUniversity>(
  "University",
  universitySchema
);

export default University;