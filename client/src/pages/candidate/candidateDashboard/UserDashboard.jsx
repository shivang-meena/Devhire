import { useContext, useEffect, useState } from "react";
import Sidebar from "./component/Sidebar";
import { SlCalender } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import JobCard from "../Browsejob/component/JobCard.jsx";
import { AuthContext } from "../../../../context/AuthContext";
import {JobContext} from "../../../../context/JobContext.jsx"

const UserDashboard = () => {
     const {Jobs}=useContext(JobContext);
     const {token,user,loading}=useContext(AuthContext);
     const [Applicationsarr,setApplicationsarr]=useState([]);
     const [Inteviewapplicationcnt,setInteviewapplcationcnt]=useState(0);

    let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }
    async function fetchapplication() {
      
        console.log(Jobs);
        // const token=localStorage.getItem('token');
        console.log(token +"thi sis in frontend ");
        const res=await fetch("http://localhost:5000/applications/my-applications",
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }
        ); 
        const json=await res.json();
        const data=json.result;
        // const data=[1,2,3,4];
        console.log(data);
        const inteviewonlyapplidata=data.filter((appli)=>{
            return appli.status==="Interview"
        });
        setInteviewapplcationcnt(inteviewonlyapplidata.length);
       setApplicationsarr(data||[]);
     }


    useEffect(()=>{
    fetchapplication();
    },[]);
 
    if (loading) {
        console.log("laoding");
        return;
    }

    return <><div className="conatiner pt-18 flex  ">
        <Sidebar colortext={"Dashboard"} sidebarspacefunc={sidebarspacefunc} />
        <div className={`maincontent !no-scrollbar h-screen mr-4 ml-20 overflow-y-auto ${marginleft ? "md:ml-66" : "ml-18"} sm:w-full md:ml-24`}>


            <div className="flex flex-col ">
                <div className="text-[33px] font-bold ">Hi Shivang, here are your matches</div>
                <div className="flex items-center gap-2"> <SlCalender />Saturday, April 11, 2026</div>
            </div>


            <div className="three-cards  flex flex-col  my-6 gap-4 md:flex-row md:w-full justify-center ">


                <div className="flex min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-xs">
                    <div className="flex flex-col  ">
                        <div className="text-sm">Applications</div>
                        <div className="text-2xl font-bold">{Array.isArray(Applicationsarr)?Applicationsarr.length:0}</div>
                    </div>
                    <div className="text-3xl bg-[#DBEAFE] p-2 rounded-md"><IoMdCheckboxOutline /></div>
                </div>

                <div className="flex  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-xs">
                    <div className="flex flex-col  ">
                        <div className="text-sm">Interviews</div>
                        <div className="text-2xl font-bold">{Inteviewapplicationcnt}</div>
                    </div>
                    <div className="text-3xl bg-[#DBFCE7] p-2 rounded-md text-[#008236]"><FaShoppingBag /></div>
                </div>

                <div className="flex  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-xs">
                    <div className="flex flex-col  ">
                        <div className="text-sm">Saved Jobs</div>
                        <div className="text-2xl font-bold">{user.savedJobs.length}</div>
                    </div>
                    <div className="text-3xl bg-[#FFE2E2] p-2 rounded-md text-[#C10007]"><IoIosHeartEmpty /></div>
                </div>

            </div>


            <div className="flex flex-col border rounded-2xl shadow-sm py-4 px-3 gap-3">
                <div className="text-xl font-semibold">Find Your Next Job</div>
                <div className=" flex flex-col gap-2 md:flex-row">
                    <div className="flex items-center gap-2 w-full border-[#F2F3F4]  border-3  rounded-md p-2  h-10 "><HiMagnifyingGlass/><input className="border-none outline-none" type="text" placeholder="Job role " /></div>
                    <div className="flex items-center gap-2 w-full border-[#F2F3F4]  border-3  rounded-md p-2  h-10 "><CiLocationOn/><input className="border-none outline-none" type="text" placeholder="Loaction?" /> </div>
                    <div><button className="btn btn-dark">Search</button></div>
                </div>
            </div>

            <div className="flex flex-col gap-4 pt-5">
                <div className="text-2xl font-bold flex  ">Featured jobs</div>
                <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                    {/* <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/> */}

                { Array.isArray(Jobs)&&Jobs.map((job)=>{
                    return <JobCard companyname={job.companyname} role={job.title} location={job.location} salary={job.salary}  skills={job.skillsNeeded} posttime={job.createdAt} jobtype={job.jobType} experience={job.experience} />
                })}

                </div>
            </div>

        </div>
    </div></>
}
export default UserDashboard;