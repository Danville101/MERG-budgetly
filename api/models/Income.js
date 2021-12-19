import mongoose from "mongoose";

const icomeSchema=  mongoose.Schema({
    category:{type: String, required: true},
    amount:{type: Number, required: true}
},{timestamps: true})

const Income = mongoose.model("Income", icomeSchema);
export default Income;
