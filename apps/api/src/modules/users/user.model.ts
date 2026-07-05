import mongoose, {
  Schema,
  HydratedDocument,
} from "mongoose";
import bcrypt from "bcrypt";

import { IUser } from "./user.interface";

import { Gender } from "../../shared/enums/gender.enum";
import { UserRole } from "../../shared/enums/role.enum";
import { UserStatus } from "../../shared/enums/user-status.enum";

type UserDocument = HydratedDocument<IUser>;

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    middleName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },

    gender: {
      type: String,
      enum: Object.values(Gender),
      required: true,
    },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.UNIVERSITY_ADMIN,
    },

    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },

    universityId: {
      type: Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Hash password before saving
 */
userSchema.pre("save", async function (this: UserDocument) {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 12);
});

/**
 * Export Model
 */
const User = mongoose.model<IUser>("User", userSchema);

export default User;