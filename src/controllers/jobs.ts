// controllers/job.ts
import { Request, Response } from "express";
import JobServices from "../services/jobs";
import Job from "../models/Job";

export const createJobController = async (req: Request, res: Response) => {
  try {
    const newJob = new Job({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        requiredSkills: req.body.requiredSkills,
        salary: req.body.salary,
        status: req.body.status,
        employer: req.body.employer,
        category: req.body.category,
        responsibilities: req.body.responsibilities,
        perks: req.body.perks,
        benefits: req.body.benefits,
        expiryDate: req.body.expiryDate,
        experience: req.body.experience,
        languages: req.body.languages
        // 646bd02ed58e14a65457fdfb
      });
    const job = await JobServices.createJob(newJob);
    res.json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create job" });
  }
};

export const getJobsController = async (req: Request, res: Response) => {
  try {
    const jobs = await JobServices.getJobs();
    res.json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve jobs" });
  }
};

export const getJobController = async (req: Request, res: Response) => {
  try {
const job = await JobServices.getJob(req.params.jobId);
    res.json(job);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve job"})
  }
}

export const deleteJobController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const job = await JobServices.deleteJob(id);
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ error: "Job not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete job" });
  }
};

export const updateJobController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const job = await JobServices.updateJob(id, newData);
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ error: "Job not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update job" });
  }
};
