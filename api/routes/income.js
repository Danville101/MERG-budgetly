import express from "express";

import { readIncome, createIncome, deleteIncome} from "../controllers/income.js";
const router = express.Router();

router.get("/", readIncome);
router.post("/", createIncome);
//router.patch("/:id", updateIncome);
router.delete("/:id", deleteIncome);
export default router;
