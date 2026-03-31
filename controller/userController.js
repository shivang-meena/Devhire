import { User } from "../models/user.js"

export const updateProfile=async(req,res)=>{
    try {
            
             let {_id}=req.user;
                    console.log("there is not such id ",_id)
              const updateData = {};
               if (req.body.name) updateData.name = req.body.name;
    if (req.body.skills) updateData.skills = req.body.skills;
    if (req.body.experience) updateData.experience = req.body.experience;
    if (req.body.education) updateData.education = req.body.education;
    //these is recruiter deatils 
    if (req.body.companyName) updateData.companyName = req.body.companyName
if (req.body.companyDescription) updateData.companyDescription = req.body.companyDescription
if (req.body.companylogo) updateData.companylogo = req.body.companylogo
   
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: "No valid fields to update"
      });
    }

             let result = await User.findByIdAndUpdate(_id, updateData, { new: true });
       if (result) {
        res.status(200).json({messege:result});
              }else{
             res.status(400).json({messege:"ther is no such user  "});
              }
    
        } catch (err) {
             res.status(400).json({messege:err+" gkjjjknk"});
        }
}



export const  uploadprofilepic=async (req,res)=>{
try {
       const url=req.file.path;
   const name=req.file.filename;
                   
       const {_id}=req.user;
     let result = await User.findByIdAndUpdate(_id, {"profilepicture.url":url,"profilepicture.name":name}, { new: true });
       if (result) {
        res.status(200).json({messege:result});
              }else{
             res.status(400).json({messege:"picture update succesfully "});
              }
} catch (err) {
                     res.status(400).json({message:err+" i am here and id was nto define d"});

        }


}



export const uploadresume=async(req,res)=>{
    try {
       const url=req.file.path;
   const name=req.file.filename;
       const {_id}=req.user;
     let result = await User.findByIdAndUpdate(_id, {"resume.url":url,"resume.name":name}, { new: true });
       if (result) {
        res.status(200).json({messege:result});
              }else{
             res.status(400).json({messege:"resume uplaod  succesfully "});
              }
} catch (err) {
             res.status(400).json({messege:err+" "});
        }

}