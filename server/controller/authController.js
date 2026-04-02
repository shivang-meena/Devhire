import dotenv from "dotenv"
if (process.env.NODE_ENV != "production") {
    dotenv.config()
}

import crypto from "crypto"
import {sendmail} from "../utils/sendEmail.js"
import { User } from "../models/user.js"
import { validationResult } from "express-validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//this was the whole regestration system 
export const registration = async (req, res) => {
    let errors = validationResult(req)//this is express defaulst validation we put all valdiation in middeware validator.js and so this verfy from there 
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        let newuser = new User(req.body);
        let result = await newuser.save();
        console.log(result);
        res.status(201).json({ message: "User registered successfully" })
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "Email already exists" })
        }
        res.status(500).json({ message: err.message })
    }
}

//this was the login system and  
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let checkuser = await User.findOne({ email: email });
        if (!checkuser) {
            return res.status(400).json({ message: "please enter valid email" })
        }
        let result = await bcrypt.compare(password, checkuser.password);
        if (!result) {
            return res.status(400).json({ message: "please enter valid password" })
        }

        const token = jwt.sign(
            {
                role: checkuser.role,
                _id: checkuser._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({ token, message: "Login successful" })


    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "no it was not workig fine " });
    }
}




//forgot password
export const forgotpass=async (req,res)=>{
      try {

        const {email}=req.body;
        const to=email;
        const resetToken = crypto.randomBytes(32).toString("hex") 
    
        const user = await User.findOne({ email: req.body.email });

if (!user) {
  return res.status(404).json({ message: "User not found" });
}

user.resetToken = resetToken;
user.resetTokenExpiry = Date.now() + 5 * 60 * 1000;
console.log(resetToken);
let url=`http://localhost:5000/user/reset-password/${resetToken}`
console.log(resetToken);
let resulttow=await user.save();
console.log(resulttow);
console.log(resetToken);
       await sendmail(to,"for reset passwrod token",url);
        res.status(200).json({message: "mail was sentet " })
      } catch (err) {
        res.status(400).json({ message:err+" "});
    }
}


//reset passwrod 
export const resetpassword=async (req,res)=>{
     try {
    console.log("yes i am working reset pasoigwod ");
        
        const {resetToken}=req.params;
        const {newpassword}=req.body;
    const user = await User.findOne({ resetToken: resetToken });
   

    if (!user) {
  return res.status(404).json({ message: "Wrong reset token user not found" });
}
   if(user.resetTokenExpiry<Date.now()){
  return res.status(404).json({ message: "reset toke was regernate it  expired" });
   }


 user.resetToken =" ";
 user.resetTokenExpiry =null;
user.password=newpassword;
await user.save();
        res.status(200).json({ message: "password was changed " })
      } catch (err) {
        console.log("yes wokring fine ")
        res.status(400).json({ message:err+" nkn"});
    }
}


export const logout = (req, res) => {
    res.status(200).json({ message: "Logged out successfully" })
}