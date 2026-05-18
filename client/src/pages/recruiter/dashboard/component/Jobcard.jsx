import { TbUsers } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../context/AuthContext";

const JobCard = ({job,settotalapplicant,totlaapplicant}) => {


    function timeAgo(createdAt) {
    const now = new Date();
    const postedDate = new Date(createdAt);

    const diffMs = now - postedDate;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (seconds < 60) {
        return `${seconds} sec ago`;
    }

    if (minutes < 60) {
        return `${minutes} min ago`;
    }

    if (hours < 24) {
        return `${hours} hr ago`;
    }

    if (days < 30) {
        return `${days} day ago`;
    }

    return `${months} month ago`;
}



    // /applications/job/:jobid

 let [applicantsvar,setapplicantsvar]=useState();
  const {token}=useContext(AuthContext);
    async function applicants() {
         try {
            const res=await fetch(`http://localhost:5000/applications/job/${job._id}`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });

            const data=await res.json();
            settotalapplicant(totlaapplicant+data.messege?.length||0);
            setapplicantsvar(data.messege.length);
            console.log(data);
         } catch (error) {
             console.log(error);
         }
    }

    useEffect(()=>{
          applicants();
    },[]);

    
    return <>
       
        <div className="jobcard flex flex-col p-6  border-2 border-[#E2E5E8]   rounded-lg gap-8 max-w-170 md:max-w-100">

            <div className="type-button flex items-center justify-between">
                 <div className="job-namerole flex font-semibold text-xl">
                {job.title}
                </div>
                <div className="type-job   text-[#008236] border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#DBFCE7]">
                    {(job.isOpen===true)?<div>active</div>:<div>not active</div>}
                </div>
            </div>


           
                <div className="location-salary flex flex-col ">
                    <div className="location flex gap-2 items-center">
                        < TbUsers/> {applicantsvar||0} Applicants
                    </div>
                    <div className="salary flex  text-[#797b7c] gap-2 items-center ">
                       <IoTimeOutline/> Posted {timeAgo(job.createdAt)}
                    </div>
                </div>

           

            <div className=" bg-[#0A345A] text-white text-md p-1 border rounded-md  time-posted-applybutton flex-center">
                <button>View Details</button>
            </div>
        </div>

    </>
}

export default JobCard