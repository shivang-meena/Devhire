import { User } from "../models/user.js"
import {Job} from "../models/job.js"
import { Application } from "../models/applications.js"




export const viewallusers= async(req,res)=>{
   try {
            
             const result=await User.find();
             if (result) {
         res.status(200).json({messege:result});
             }else{
            res.status(400).json({messege:"ther is no user in you appp "});
             }
       } catch (err) {
        console.log(err);
            res.status(400).json({messege:err});
       }
}


//this is for block or unblock the use r
export const blockandunblock=async (req,res)=>{
     try {
             const {id}=req.params;
            
         const user = await User.findById(id);
        if (!user) {
         return res.status(404).json({messege:"there is noo such user found "});
          }else{
              user.isBlocked = !user.isBlocked;
              await user.save();
        let result = (user.isBlocked) ? "blocked" : "unbloeckd";
     res.status(200).json({messege:`user was ${result}`});
                
          }
         } catch (err) {
            console.log(err);
              res.status(400).json({messege:err});
         }
     
}



export const deleteUser= async(req,res)=>{
     try{
            const {id}=req.params;
             let result=await  User.findByIdAndDelete(id);
             console.log(result);
       if (result) {
        res.status(200).json({messege:result});
              }else{
             res.status(400).json({messege:"ther is no user found"});
              }
         }catch (err) {
             res.status(400).json({messege:err+" "});
        }
}




export const viewalljobs=async (req,res)=>{
        try {
             const result=await Job.find();
             if (result) {
         res.status(200).json({messege:result});
             }else{
            res.status(400).json({messege:"ther is no jobs in you appp "});
             }
       } catch (err) {
            res.status(400).json({messege:err});
       }
}


export const deletejob=async(req,res)=>{
     try{
         const {id}=req.params;
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



export const statsall=async (req,res)=>{
     try {
           const jobresult=await Job.countDocuments();
             const useresult=await User.countDocuments();
             const applicationsresult=await Application.countDocuments();
         if(jobresult||useresult||applicationsresult){
          res.status(200).json({messege:"job :- "+jobresult+"/n users:- "+useresult+"/n applications:-"+applicationsresult}); 
        }else{
         res.status(400).json({messege:"there no specific job was finded"});
        }

     } catch (err) {
             res.status(400).json({messege:err});
     }
}