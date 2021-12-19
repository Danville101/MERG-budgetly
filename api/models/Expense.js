import mongoose from "mongoose";

const expenseSchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
