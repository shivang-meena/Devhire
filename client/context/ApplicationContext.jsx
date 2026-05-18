import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";

export const ApplicationContext=createContext();

export const ApplicationProvider=({children})=>{
   let [applications,setapplications]=useState();
    const {token,user}=useContext(AuthContext);
   async function fetchapplications() {
          const res=await fetch("http://localhost:5000/applications/my-applications",{
           headers:{
            Authorization:`Bearer ${token}`
           }
          });
          const applicationdata=await res.json();
          console.log(applicationdata);
          setapplications(applicationdata.result);
          console.log("fmasnfasnfnaskdfnkaj");
   }

   useEffect(()=>{
      if (!token) {
         console.log("thre is no tokn jherer ");
         return;
      }
      if(user.role==="candidate"){
         fetchapplications();
      }
   },[token]);
          return (<ApplicationContext.Provider value={{applications}}>
             {children}
          </ApplicationContext.Provider>)
}