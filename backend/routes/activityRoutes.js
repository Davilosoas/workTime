import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  getActivities,
  createActivity,
  deleteActivity,
  getActivityReport,
} from "../controllers/activityController.js";

const router = express.Router();

router.post("/", authenticate, createActivity);
router.get("/", authenticate, getActivities);
router.delete("/:id", authenticate, deleteActivity);
router.get("/report", authenticate, getActivityReport);

export default router;
