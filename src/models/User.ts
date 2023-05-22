// models/User.ts
import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export type UserDocument = Document & {
  username: string;
  email: string;
  password: string;
  role: string;
};

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "employer", "employee"],
    default: "employee",
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
