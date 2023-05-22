// services/job.ts
import { JobDocument } from "../models/Job";
import Job from "../models/Job";

const createJob = async (job: JobDocument): Promise<JobDocument> => {
  return job.save();
};

const getJobs = async (): Promise<JobDocument[]> => {
  return Job.find();
};

const deleteJob = async (id: string): Promise<JobDocument | null> => {
  return Job.findByIdAndDelete(id);
};

const updateJob = async (
  id: string,
  newData: Partial<JobDocument>
): Promise<JobDocument | null> => {
  return Job.findByIdAndUpdate(id, newData, { new: true });
};

export default { createJob, getJobs, deleteJob, updateJob };
