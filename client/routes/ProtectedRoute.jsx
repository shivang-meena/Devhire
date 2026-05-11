import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoutes=({children,role})=>{
      const{user,token,loading}=useContext(AuthContext);

      const storedtoken=token||localStorage.getItem("token");
      const storeuser=user||localStorage.getItem("user");
      if(loading){
         return <div>Loading......</div>
      }
      if(!storedtoken){
       return  <Navigate to={"/login"}/>
      }
  
      if(storeuser&&storeuser.role!==role){
      return   <Navigate to={"/login"}/>     
      }
    
      return children;
}

export default ProtectedRoutes;