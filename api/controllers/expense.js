import Expense from "../models/Expense.js";
import mongoose from "mongoose";


const valid = mongoose.Types.ObjectId.isValid


export const createExpense = async (req, res) => {
  const expenses = new Expense(req.body);
  try {
    await expenses.save();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(409).json(error);
  }
};


export const readExpense = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteExpense= async(req,res)=>{
  const{id}= req.params;
  if(!valid(id)){
    return res.status(404).send(`The Id${id} is invalid`)
  } await  Expense.findByIdAndRemove(id);
  res.json({message:"Delete Successful"})
}

