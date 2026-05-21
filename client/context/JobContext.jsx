import { createContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const JobContext=createContext();

export const JobProvider=({children})=>{
    const [refresh, setRefresh] = useState();
         const {token,user}=useContext(AuthContext);
         const [Jobs,setJobs]=useState();
         const [recruiterjobs,setrecuiterjobs]=useState();
         const [jobloading,setjobloading]=useState(false);
        const currentToken = localStorage.getItem('token');

        const [adminrecentjobs,setadminrecentjobs]=useState([]);
        const [adminrecentusers,setadminrecentusers]=useState([]);
        const [adminrefresh,setadminrefresh]=useState(0);

        const Jobsgetter= async (newtoken)=>{
            setjobloading(true);
            
           const res=await fetch("http://localhost:5000/Jobs/all",{
            headers:{
                Authorization:`Bearer ${newtoken||currentToken}`
            }
           });
           const jobdata=await res.json();
            console.log(jobdata);
            setJobs(jobdata.jobs);

            setjobloading(false);
        }
 
        const recruiterjongetter=async (newtoken)=>{
            try {
           

                const res=await fetch("http://localhost:5000/jobs/my-jobs",{
                    method:"GET",
                     headers:{
                Authorization:`Bearer ${newtoken||currentToken}`
            }
                });

                const jobdata=await res.json();
                console.log(jobdata);
                setrecuiterjobs(jobdata.messege);
              
            } catch (error) {
                console.log(error);
            }
        }



    useEffect(()=>{
        // ✅ read directly from localStorage — always has latest value
       
        const currentUser = JSON.parse(localStorage.getItem('user'));
       
        //   console.log(currentToken);
        // console.log(currentToken);
         setJobs([]);
    setrecuiterjobs([]);


    if (!currentToken||!currentUser?._id) {
        return;
    }

     if (user?.role==="candidate") {
         Jobsgetter();
     }else if (user?.role==="recruiter") {
      recruiterjongetter();  
     }  
     setRefresh("done"); 
      setjobloading(false);
    },[refresh]);

    useEffect(()=>{
        
        // ✅ read directly from localStorage — always has latest value
        const currentToken = localStorage.getItem('token');
        const currentUser = JSON.parse(localStorage.getItem('user'));
    
        //   console.log(currentToken);
    
        // console.log(currentToken);
         setJobs([]);
    setrecuiterjobs([]);


    if (!currentToken||!currentUser?._id) {
        return;
    }

          
     if (user?.role==="candidate") {
         Jobsgetter();
     }else if (user?.role==="recruiter") {
        // console.log(user?._id);
      recruiterjongetter();  
     }
     setjobloading(true);
    },[token,user?._id,refresh]);


    return (<JobContext.Provider value={{adminrefresh,setadminrefresh,adminrecentusers,setadminrecentusers,adminrecentjobs,setadminrecentjobs,recruiterjongetter,Jobsgetter,Jobs,recruiterjobs,setRefresh,refresh,jobloading,setjobloading}}>
        {children}
 </JobContext.Provider>);
}
 
