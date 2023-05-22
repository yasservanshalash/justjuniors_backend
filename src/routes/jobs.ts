// routes/job.ts
import { Router } from "express";
import {
  createJobController,
  deleteJobController,
  getJobsController,
  updateJobController,
} from "../controllers/jobs";

const router = Router();

router.get("/", getJobsController);
router.post("/", createJobController);
router.delete("/:id", deleteJobController);
router.put("/:id", updateJobController);

export default router;
