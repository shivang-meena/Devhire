import { Application } from "../models/applications.js"
import {Job} from "../models/job.js"


//this is for candiate 
export const applyJob=async (req,res)=>{
   try{

    const existing = await Application.findOne({ applicantId: _id, jobid })
if(existing) {
    return res.status(400).json({ message: "Already applied to this job" })
}

       const {jobid}=req.params;
       const {_id}=req.user;
       console.log("i am here and ther is no eroro ",_id);
       const alldetails={...req.body,applicantId:_id,jobid};
   
    const newapplication=new Application(alldetails);

    let result=await newapplication.save();
    console.log(result);
    res.status(200).json({messege:result})
   }catch(err){
    res.status(400).json({messege:err+" "});
   }
    
}


//this si for view my appication for candidate s
export const viewMyapplications=async(req,res)=>{
    try{
    const {_id}=req.user;
     const result=await Application.find({applicantId:_id});
     if(result){
    res.status(200).json({messege:result});
     }else{
         res.status(400).json({messege:"ther is no such applications "});
     }
    }catch(err){
    res.status(400).json({messege:err+" "});
    }
}


//these is for view any specefic job applicatns 
export const viewapplicationsforJob=async (req,res)=>{
    try {
         const {jobid}=req.params;
          const result=await Application.find({jobid:jobid});
          if (result) {
    res.status(200).json({messege:result});
          }else{
         res.status(400).json({messege:"ther is no such applications "});
          }
    } catch (err) {
         res.status(400).json({messege:err+" "});
    }
}


//these is for uda status 
export const updatestatus=async (req,res)=>{
    try {
        const {id}=req.params;
        let resultone=await Application.findById(id);
        let jobid=resultone.jobid;
        let resulttwo=await Job.findById(jobid);
         let {_id}=req.user;
          if(resulttwo.recruiterid.toString()!==_id.toString()){
             return  res.status(400).json({messege:"there is diffrecet recrutier job not yos "});
          }
         let result = await Application.findByIdAndUpdate(
  id,
  { status: req.body.status },
  { new: true, runValidators: true }
);
   if (result) {
    res.status(200).json({messege:result});
          }else{
         res.status(400).json({messege:"ther is no such applications "});
          }

    } catch (err) {
         res.status(400).json({messege:err+" "});
    }
}

//thes is for delee any applcatiosn
export const deleteapplication=async (req,res)=>{
     try{
        const {id}=req.params;
            
         let result=await  Application.findByIdAndDelete(id);
         console.log(result);
   if (result) {
    res.status(200).json({messege:result});
          }else{
         res.status(400).json({messege:"ther is no such applications "});
          }
     }catch (err) {
         res.status(400).json({messege:err+" "});
    }
}



//view all applications 
export const viewALL=async(req,res)=>{
 try{
     const result=await Application.find();
     if(result){
    res.status(200).json({messege:result});
     }else{
         res.status(400).json({messege:"ther is no applicatiosnfound "});
     }
    }catch(err){
    res.status(400).json({messege:err+" fasdmf;"});
    }
}