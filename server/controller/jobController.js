import {Job} from "../models/job.js"
import { validationResult } from "express-validator"
import mongoose from "mongoose"

//this is for creating job
export const createJob=async(req,res)=>{
    try{
        
    let errors=validationResult(req);
       if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()});
       }
       console.log(req.user.id,"this is the recutie id ");
    const newjob = new Job({ ...req.body, recruiterid: req.user._id })
    let result=await newjob.save();
    console.log(result);
     res.status(200).json({messege:result});
    
    }catch(err){
        res.status(400).json({messege:err});
    }
}

//this was for deleting job
export const deleteJob=async (req,res)=>{
   try{
    const {id}=req.params;
   console.log(id);
   let result=await Job.findByIdAndDelete(id);
   if(result){
     res.status(200).json({messege:result}); 
   }else{
    res.status(400).json({messege:"there no specific job was finded"});
   }
   }catch(err){
        res.status(400).json({messege:err});
    }
}


//thsse was for edit 
export  const  editJob=async (req,res)=>{
         try{
            const {id}=req.params
         let result=await Job.findByIdAndUpdate(id,req.body,{new:true});
         console.log(result);
     res.status(200).json({messege:result}); 
         }catch(err){
        res.status(400).json({messege:err});
    }   
}


//these was for view all my job of recruter 
export const myAllJobs=async (req,res)=>{
       try{
         const {_id}=req.user;
    const result=await Job.find({recruiterid: new mongoose.Types.ObjectId(_id)});
    console.log(result);
    console.log(req.user,"this wa the id ");
   
     res.status(200).json({messege:result});
       }catch(err){
        res.status(400).json({messege:err+"this was not workign"});
    }   
}


//this is candidate job view 
export const viewJobs=async(req,res)=>{
      try{
            const result=await Job.find({ isOpen: true});
            if(!result){
                res.status(400).json({messege:"no jobs was found "});
            }else{
                res.status(200).json({jobs:result});
            }
      }catch(err){
         res.status(400).json({messege:err});
      }
}


export const viewDetails=async(req,res)=>{
      try{
        const {id}=req.params;
            const result=await Job.findById(id);
            if(result){
                res.status(200).json({job:result});
            }
      }catch(err){
         res.status(400).json({messege:err});
      }
}