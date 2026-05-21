import { Router } from "express";
const route=Router();
import {authMiddleware,roleMiddileware} from "../middleware/authMiddleware.js"
import {viewallusers,blockandunblock,deleteUser,viewalljobs,deletejob,statsall, toggleJobStatus} from "../controller/adminController.js"


route.get("/users",authMiddleware,roleMiddileware("admin"),viewallusers);
 
route.put("/block/:id",authMiddleware,roleMiddileware("admin"),blockandunblock);

route.delete("/delete/:id",authMiddleware,roleMiddileware("admin"),deleteUser);


route.get("/jobs",authMiddleware,roleMiddileware("admin"),viewalljobs);

route.delete("/job/:id",authMiddleware,roleMiddileware("admin"),deletejob);

route.get("/stats",authMiddleware,roleMiddileware("admin"),statsall);

route.patch("/status/:id",authMiddleware,roleMiddileware("admin"),toggleJobStatus);

export default route;