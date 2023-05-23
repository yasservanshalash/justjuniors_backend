// models/Job.ts
import mongoose, { Document } from "mongoose";
import { number } from "yup";

const { Schema } = mongoose;

export type JobDocument = Document & {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
  salary: number | string;
  status: string;
  employer: string; // Employer ID of the employer who posted the job
  category: string;
  responsibilities: string[];
  perks: string[];
  benefits: string[];
  datePosted: string;
  expiryDate: string;
  experience: number;
  languages: string[];

};

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  requiredSkills: {
    type: [String],
    default: [],
  },
  salary: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "active",
  },
  employer: {
    type: Schema.Types.ObjectId,
    ref: "Employer",
    // required: true,
  },
  category: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String]
  },
  perks: {
    type: [String]
  },
  benefits: {
    type: [String]
  },
  datePosted: {
    type: Date,
    default: Date.now()
  },
  expiryDate: {
    type: Date
  },
  experience: {
    type: Number,
  },
  languages: {
    type: [String]
  }
});

export default mongoose.model<JobDocument>("Job", JobSchema);
