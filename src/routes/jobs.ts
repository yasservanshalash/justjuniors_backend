// routes/job.ts
import { Router } from "express";
import {
  createJobController,
  deleteJobController,
  getJobController,
  getJobsController,
  updateJobController,
} from "../controllers/jobs";

const router = Router();

router.get("/", getJobsController);
router.get("/:jobId", getJobController);
router.post("/", createJobController);
router.delete("/:id", deleteJobController);
router.put("/:id", updateJobController);

export default router;
