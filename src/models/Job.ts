// models/Job.ts
import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export type JobDocument = Document & {
  title: string;
  description: string;
  company: string;
  location: string;
  requiredSkills: string[];
  salary: number;
  status: string;
  employer: string; // Employer ID of the employer who posted the job
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
  company: {
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
    required: true,
  },
});

export default mongoose.model<JobDocument>("Job", JobSchema);
