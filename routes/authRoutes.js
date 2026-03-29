import { registration,login } from "../controller/authController.js";
import { Router } from "express";
import {validateUser} from "../middleware/validator.js"


const route=Router();
route.post("/signup",validateUser,registration);

route.post("/login",login);

export default route;