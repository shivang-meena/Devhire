import mongoose from 'mongoose'
const { Schema } = mongoose


let jobSchema=new Schema({
    title:String,
    description:String,
    recruiterid:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
     skillsNeeded:[String],
     location:String,
     jobType:{
        type:String,
        enum: ["Full-Time", "Part-Time", "Remote", "Internship","Contract"] 
     },
     salary:String,
     experience:String,
     Companyname:String,
     isOpen: { type: Boolean, default: true }//in recurite hand it can change status on fullfillment 

}, { timestamps: true });



export let Job=mongoose.model("Job",jobSchema);
