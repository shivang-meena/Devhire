import { createContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const JobContext=createContext();

export const JobProvider=({children})=>{
         const {token,loading,setloading}=useContext(AuthContext);
         const [Jobs,setJobs]=useState();

        const Jobsgetter= async ()=>{
            setloading(true);
           const res=await fetch("http://localhost:5000/Jobs/all",{
            headers:{
                Authorization:`Bearer ${token}`
            }
           });
           const jobdata=await res.json();
            console.log(jobdata);
            setJobs(jobdata.jobs);

            setloading(false);
        }
    useEffect(()=>{
    if (!token) {
        return;
    }    
        Jobsgetter()
    
    },[token]);


    return (<JobContext.Provider value={{Jobs}}>
        {children}
 </JobContext.Provider>);
}
 
