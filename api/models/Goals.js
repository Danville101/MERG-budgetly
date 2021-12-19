import  mongoose from "mongoose";

const goalsSchema= mongoose.Schema({
    goals:{type:Number, required:true},
    end_date:{type: String, required:true }
},{timestamps: true})

const Goals = mongoose.model("Goals", goalsSchema);
export default Goals;