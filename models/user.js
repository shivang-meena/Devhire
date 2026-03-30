import mongoose from 'mongoose'
const { Schema } = mongoose
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


//this is use shcema 
let userSchema=new Schema({
     name:String,
     email:{
        type:String,
        unique:true
     },
     password:String,
     role:{
        type:String,
        enum:["candidate","admin","recruiter"]
     },
     profilepicture:String,


     //this is candidate only fields
     resume:String,
     skills:[String],
     experience:String,
     education:String,


     //recruiter only fields 
     companyName:String,
     companylogo:String,
     companyDescription:String,

     isBlocked: { type: Boolean, default: false }//this is for admin if admin want to block any candidatre or user
     
}, { timestamps: true });

userSchema.pre("save",async function() {
        if(!this.isModified("password")){
        return 
        }
   this.password=await bcrypt.hash(this.password,10);
   console.log(this.password)

});





export let User=mongoose.model("User",userSchema);