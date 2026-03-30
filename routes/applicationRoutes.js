import { Router } from "express";
const route=Router();
import {authMiddleware,roleMiddileware} from "../middleware/authMiddleware.js"
import {applyJob,viewMyapplications,viewapplicationsforJob,updatestatus,deleteapplication,viewALL} from "../controller/applicationController.js"


route.post("/apply/:jobid",authMiddleware,roleMiddileware("candidate"),applyJob);

route.get("/my-applications",authMiddleware,roleMiddileware("candidate"),viewMyapplications);

//this route for view all apllication fro specific job
route.get("/job/:jobid",authMiddleware,roleMiddileware("recruiter"),viewapplicationsforJob);
//this si for recuite updat 
route.put("/status/:id",authMiddleware,roleMiddileware("recruiter"),updatestatus);
//thes is for dlete 
route.delete("/:id",authMiddleware,roleMiddileware("recruiter"),deleteapplication);

route.get("/view/all", authMiddleware, roleMiddileware("admin"),viewALL);

export default route;