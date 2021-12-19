import express from "express";

import { readExpense, createExpense, deleteExpense } from "../controllers/expense.js";
const router = express.Router();

router.get("/", readExpense);
router.post("/", createExpense);
//router.patch("/:id", updateIncome);
router.delete("/:id", deleteExpense);
export default router;
