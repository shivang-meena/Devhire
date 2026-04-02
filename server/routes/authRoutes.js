import { registration,login,resetpassword,forgotpass ,logout} from "../controller/authController.js";
import { Router } from "express";
import {validateUser} from "../middleware/validator.js"


const route=Router();
route.post("/signup",validateUser,registration);

route.post("/login",login);

route.post("/forgot-password",forgotpass);

route.post("/reset-password/:resetToken",resetpassword);

route.get("/logout",logout);
export default route;