import mongoose, { Schema, model } from "mongoose";
import { IUniversity } from "./university.interface";

const universitySchema = new Schema<IUniversity>(
  {
    // Basic Information
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

    // Contact
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

    website: String,

    // Address
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

    // Branding
    logo: String,

    primaryColor: {
      type: String,
      default: "#2563EB",
    },

    secondaryColor: {
      type: String,
      default: "#0F172A",
    },

    favicon: String,

    // Academic
    gradingSystem: {
      type: String,
      default: "5-POINT",
    },

    currentSession: String,

    currentSemester: String,

    // Subscription
    subscriptionPlan: {
      type: String,
      default: "FREE_TRIAL",
    },

    subscriptionStartDate: Date,

    subscriptionEndDate: Date,

    // Status
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const University = model<IUniversity>(
  "University",
  universitySchema
);