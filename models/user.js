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
     profilepicture:{
      url:String,
      name:String
     },


     //this is candidate only fields
     resume:{
      url:String,
      name:String
     },
     skills:[String],
     experience:String,
     education:String,


     //recruiter only fields 
     companyName:String,
     companylogo:String,
     companyDescription:String,

     //this is for mail toke 
     resetToken: String,
     resetTokenExpiry: Date,

     isBlocked: { type: Boolean, default: false }//this is for admin if admin want to block any candidatre or user
     
}, { timestamps: true });

userSchema.pre("save",async function() {
        if(!this.isModified("password")){
        return 
        }
   this.password=await bcrypt.hash(this.password,10);
   console.log(this.password)

});

userSchema.pre("findOneAndUpdate", async function(next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 10);
  }
 
});



export let User=mongoose.model("User",userSchema);