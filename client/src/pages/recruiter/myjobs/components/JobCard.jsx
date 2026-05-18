import { IoPersonAdd } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect,useState ,useContext} from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { JobContext } from "../../../../../context/JobContext";

let JobCard = ({job}) => {
   const navigate=useNavigate();
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




 let [applicantsvar,setapplicantsvar]=useState();
  const {token}=useContext(AuthContext);
  const {setRefresh}=useContext(JobContext);
  
    async function applicants() {
         try {
            const res=await fetch(`http://localhost:5000/applications/job/${job._id}`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });


            const data=await res.json();
            setapplicantsvar(data.messege.length);
         } catch (error) {
             console.log(error);
         }
    }

    useEffect(()=>{
          applicants();
    },[]);



  async function deletejob(){
     try {
            const res=await fetch(`http://localhost:5000/jobs/${job._id}`,{
                method:"DElETE",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });

            const data=await res.json();
            console.log(data);
           setRefresh("job was deleted ");
         } catch (error) {
             console.log(error);
         }
  }


  async function togglestatus(){
     try {
            const res=await fetch(`http://localhost:5000/jobs/${job._id}/status`,{
                method:"PATCH",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });

            const data=await res.json();
            console.log(data);
           setRefresh("status was updated");
         } catch (error) {
             console.log(error);
         }
  }

    return <>
        <div className=" flex flex-col p-6  border-2 border-[#E2E5E8]   rounded-lg gap-4 w-full ">
            <div className="flex gap-3 items-center"> 
                <div className="flex font-bold text-xl">{job.title}</div>
                <div className={`type-job   text-[#008236] ${(job.isOpen===false)?'bg-red-400':'bg-green-300'} border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#DBFCE7]`}>{(job.isOpen===true)?<div>Open</div>:<div>Close</div>}</div>
            </div>



      <div className="flex flex-col gap-5 md:flex-row">
                   
            <div className="sm:flex">

                <div className="flex items-center ">
                    <div>
                        <div className="text-[#797b7c] ">Location</div>
                        <div className="w-[110px] font-medium text-[15px]">{job.location}</div>
                    </div>
                    <div>
                        <div className=" text-[#797b7c]">Salary</div>
                        <div  className="w-[110px] font-medium text-[15px]">{job.salary}K</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div>
                        <div className=" text-[#797b7c]">Type</div>
                        <div  className="w-[110px] font-medium text-[15px]">Full-time</div>
                    </div>
                    <div>
                        <div className=" text-[#797b7c]">Posted</div>
                        <div  className="w-[110px] font-medium text-[15px]">{timeAgo(job.createdAt)}</div>
                    </div>
                </div>

            </div>


            <div className="flex px-3 pr-4 flex items-center bg-[#F3F5F8] items-center gap-3 border shadow-md   rounded-lg">
                <div className="text-xl" ><IoPersonAdd /></div>
                <div className=" text-[15px] flex flex-col text-center">
                    <div >Applicants</div>
                    <div className="text-3xl font-bold">{applicantsvar}</div>
                </div>
            </div>


      </div>

            <div className="flex flex-col md:flex-row gap-2">

                <div className="flex gap-2 items-center">
                   <Link className="!no-underline  !text-black " to={`/recruiter-editjob/${job._id}`} >
                    <div  className="flex items-center border-1 border-[#E2E5E8] shadow-md px-4 py-1 text-md gap-2 rounded-sm">
                        <div><BiSolidEdit /></div>
                        <div>Edit</div>
                    </div>
                   </Link>
                  
                    <div onClick={()=>{navigate("/applicants",{state:job._id});}} className="flex items-center cursor-pointer shadow-md px-3 border-1 border-[#E2E5E8] py-1 text-md gap-2 rounded-sm">
                        <div><IoPersonAdd /></div>
                        <div>Applicants</div>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div onClick={()=>{togglestatus()}} className="flex items-center border-1 cursor-pointer  border-[#E2E5E8] shadow-md px-4 py-1 text-md gap-2 rounded-sm">
                        <div>{(job.isOpen===true)?<MdToggleOff/>:<MdToggleOn/>}</div>
                        <div >
                            {(job.isOpen===true)?<div>Close</div>:<div>Open</div>}
                        </div>
                    </div>

                    <div onClick={(e)=>{deletejob(e)}} className="flex cursor-pointer text-red-400 items-center border-1 border-[#E2E5E8] shadow-md px-4 py-1 text-md gap-2 rounded-sm">
                        <div><RiDeleteBin6Line/></div>
                        <div>Delete</div>
                    </div>
                </div>


            </div>


        </div>
    </>
}

export default JobCard;