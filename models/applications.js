
import mongoose from 'mongoose'
const { Schema } = mongoose


let ApplicationsSchema=new Schema({
    applicantId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    jobid:{
        type:Schema.Types.ObjectId,
        ref:"Job"
    },
     status:{
        type:String,
         enum: ["applied", "reviewed", "interview", "selected", "rejected"],
         default:"applied"
     },
     coverLetter:String
}, { timestamps: true });



export let Application=mongoose.model("Application",ApplicationsSchema);

