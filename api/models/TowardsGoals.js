import mongoose from "mongoose";

const towardsGoalsSchema= mongoose.Schema({
    towardsGoals:{type:Number, required:true}
},{timestamps: true})

const TowardsGoals = mongoose.model("TowardsGoals", towardsGoalsSchema);
export default TowardsGoals;