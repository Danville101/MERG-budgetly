
import Goals from "../models/Goals.js";

export const readGoals = async (req, res) => {
  try {
    const goals = await Goals.find();
    res.status(200).json(goals);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createGoals = async (req, res) => {
  const goals = new Goals(req.body);
  try {
    await goals.save();
    res.status(200).json(goals);
  } catch (error) {
    res.status(409).json(error);
  }
};
