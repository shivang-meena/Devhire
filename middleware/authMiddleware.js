import jwt from "jsonwebtoken"
import dotenv from "dotenv"
if (process.env.NODE_ENV != "production") {
    dotenv.config()
}

export const  authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
     if(!token){
        return res.status(400).send("no valid token");
      }

      try{
          const decode=jwt.verify(token,process.env.JWT_SECRET);
          console.log(req.user);
          req.user=decode;
         next();
      }catch(err){
        res.status(400).json({message:err});
      }
}

export const roleMiddileware=(role)=>{
    return (req,res,next)=>{
        console.log(req.user.role ," this i role");
     if(role===req.user.role){
        next();
     }else{
         res.status(400).json({message:`you are not ${role} only ${role} can acess `});
     }
}
}