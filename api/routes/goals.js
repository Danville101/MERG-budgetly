import express from "express";

import { readGoals, createGoals} from "../controllers/goals.js";
const router = express.Router();

router.get("/", readGoals);
router.post("/", createGoals);
//router.patch("/:id", updateIncome);
//router.delete("/:id", deleteIncome);
export default router;
