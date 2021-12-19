
import TowardsGoals from "../models/TowardsGoals.js";
export const readTowardsGoals = async (req, res) => {
  try {
    const towardsGoals = await TowardsGoals.find();
    res.status(200).json(towardsGoals);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createTowardsGoals = async (req, res) => {
  const towardsGoals = new TowardsGoals(req.body);
  try {
    await towardsGoals.save();
    res.status(200).json(towardsGoals);
  } catch (error) {
    res.status(409).json(error);
  }
};