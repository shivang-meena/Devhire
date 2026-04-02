// const express=require("express");
import express from "express";
const app=express();
import mongoose from "mongoose"

import route from "./routes/authRoutes.js"
import jobRoute from "./routes/jobRouter.js"
import Applicationroute from "./routes/applicationRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import profile from "./routes/userRotues.js"
app.use(express.json())

main().then(()=>{
    console.log("coonnected ")
}).catch((err)=>{
    console.log(err)
});
async function main() { 
      await mongoose.connect("mongodb://127.0.0.1:27017/devhire");      
}

app.use("/user",route);

app.use("/jobs",jobRoute);
 
app.use("/applications",Applicationroute);

app.use("/admin",adminRoutes);

app.use("/user",profile);



app.listen(5000,()=>{
     console.log("server was listneing at 5000");
});


