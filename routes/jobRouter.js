import {Router} from "express"
import {validateJobs} from "../middleware/validator.js"
import {roleMiddileware,authMiddleware} from "../middleware/authMiddleware.js"
import {createJob,deleteJob,editJob,myAllJobs,viewJobs,viewDetails} from "../controller/jobController.js"
const route=Router();

route.post("/create",authMiddleware,roleMiddileware("recruiter"),validateJobs,createJob);

route.delete("/:id",authMiddleware,roleMiddileware("recruiter"),deleteJob);

route.put("/:id",authMiddleware,roleMiddileware("recruiter"),validateJobs,editJob);

route.get("/my-jobs",authMiddleware,roleMiddileware("recruiter"),myAllJobs);

route.get("/all",authMiddleware,viewJobs);

route.get("/:id",authMiddleware,viewDetails);

export default route;