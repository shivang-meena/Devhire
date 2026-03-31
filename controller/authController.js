import dotenv from "dotenv"
if (process.env.NODE_ENV != "production") {
    dotenv.config()
}

import crypto from "crypto"
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

        const {from,to,text}=req.body;
                 
      } catch (err) {
        res.status(400).json({ message: "no it was not workig fine " });
    }
}