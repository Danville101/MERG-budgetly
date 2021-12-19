import express from "express";

import { readTowardsGoals, createTowardsGoals} from "../controllers/towardsgoals.js";
const router = express.Router();

router.get("/", readTowardsGoals);
router.post("/", createTowardsGoals);
//router.patch("/:id", updateIncome);
//router.delete("/:id", deleteIncome);
export default router;