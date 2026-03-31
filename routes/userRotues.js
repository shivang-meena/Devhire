import {updateProfile,uploadprofilepic,uploadresume} from "../controller/userController.js"
import { Router } from "express";
const route=Router();
import {authMiddleware,roleMiddileware} from "../middleware/authMiddleware.js"

import multer from "multer"
import  {storagerofilepic,storageResume,cloudinary} from "../middleware/upload.js"
const uploadprofile=multer({storage:storagerofilepic});
const uploadresumeconfig=multer({storage:storageResume});


route.put("/update-profile",authMiddleware,updateProfile);

route.put("/upload-picture",authMiddleware,roleMiddileware("candidate"),uploadprofile.single("picture"),uploadprofilepic);

route.put("/upload-resume",authMiddleware,roleMiddileware("candidate"),uploadresumeconfig.single("resume"),uploadresume);


export default route;