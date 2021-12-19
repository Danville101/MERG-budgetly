import  mongoose  from "mongoose";
import Income from "../models/Income.js";


const valid = mongoose.Types.ObjectId.isValid

export const readIncome = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createIncome = async (req, res) => {
  const incomes = new Income(req.body);
  try {
    await incomes.save();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const deleteIncome= async(req,res)=>{
  const{id}=  req.params;
  if(!valid(id)){
    return res.status(404).send(`The Id${id} is invalid`)
  } await  Income.findByIdAndRemove(id);
  res.json({message:"Delete Successful"})

}