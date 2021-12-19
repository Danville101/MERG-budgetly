import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import incomeRoutes from "./routes/income.js";
import expenseRoutes from "./routes/expense.js";
import golasRoutes from "./routes/goals.js"
import towardsgoalsRoutes from "./routes/towardsgoals.js"

//
const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json({ extened: true }));
app.use(express.urlencoded({ extened: true }));
app.use(cors());

app.listen(3500, () => {
  try {
    console.log("Connected To Backend");
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(process.env.MONGO_URL, () => {
  try {
    console.log("Connected To DataBase ");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

app.use("/income", incomeRoutes);
app.use("/expense", expenseRoutes);
app.use("/goals", golasRoutes)
app.use("/towardsgoals", towardsgoalsRoutes)
//
