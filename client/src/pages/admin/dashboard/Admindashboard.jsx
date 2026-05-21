import { SlCalender } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiBuildingOffice } from "react-icons/pi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi";



import { useContext, useEffect, useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import { AuthContext } from "../../../../context/AuthContext";
import { JobContext } from "../../../../context/JobContext";


const Admindashboard = () => {
 const{setadminrecentusers,setadminrecentjobs,adminrefresh}=useContext(JobContext);
const {token}=useContext(AuthContext);

  const [recentjobs, setrecentjobs] = useState([]);
    const [users, setusers] = useState([]);
    const [loading,setloading]=useState();

    
const Jobsgetter= async ()=>{
            setloading(true);
            try {
     
           const res=await fetch("http://localhost:5000/admin/jobs",{
            headers:{
                Authorization:`Bearer ${token}`
            }
           });

            const jobdata=await res.json();
            console.log(jobdata);
            setrecentjobs(jobdata.messege);
            setloading(false);
            setadminrecentjobs(jobdata.messege);
            } catch (error) {
                console.log(error);
            }

        }

        const formatdate=(dateparam)=>{
            const date = new Date(dateparam);

const formattedDate =
`${date.getDate().toString().padStart(2,"0")}-
${(date.getMonth()+1).toString().padStart(2,"0")}-
${date.getFullYear()}`;
return formattedDate;
        }


const Usergetter= async ()=>{
    setloading(true);
            try {
     
           const res=await fetch("http://localhost:5000/admin/users",{
            headers:{
                Authorization:`Bearer ${token}`
            }
           });

            const jobdata=await res.json();
            setusers(jobdata.messege);
            setloading(false);
           console.log(jobdata);
           
           setadminrecentusers(jobdata.messege);
            } catch (error) {
                console.log(error);
            }

        }


        useEffect(()=>{
            Usergetter();
            console.log("hjbghvvhvh");
       Jobsgetter();
    
        },[adminrefresh]);

    let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }


  

    return (!loading)?<div className="conatiner pt-18 flex  ">
        <Sidebar colortext={"Dashboard"} sidebarspacefunc={sidebarspacefunc} />
        <div className={`maincontent !no-scrollbar h-screen mr-4 ml-20 !overflow-y-auto ${marginleft ? "md:ml-69" : "ml-18"} sm:w-full md:ml-24`}>


            <div className="flex flex-col ">
                <div className="text-[33px] font-bold ">Admin Dashboard </div>
                <div className="flex items-center gap-2">Welcome back! Here's your platform overview.</div>
            </div>


            <div className="three-cards  flex flex-col  my-6 gap-4 md:flex-row md:w-full justify-center ">


                <div className="flex max-h-[120px] min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Job Posted</div>
                        <div className="text-2xl font-bold">{recentjobs.length}</div>
                    </div>
                    <div className="text-3xl bg-[#DBEAFE] p-2 rounded-md"><FaShoppingBag /></div>
                </div>

                <div className="flex max-h-[120px]  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Candidates</div>
                        <div className="text-2xl font-bold">{users.length}</div>
                    </div>
                    <div className="text-3xl bg-[#DBFCE7] p-2 rounded-md text-[#008236]"><GiGraduateCap /></div>
                </div>

                <div className="flex max-h-[120px]  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Recruiters</div>
                        <div className="text-2xl font-bold">{users.filter((job)=>{return job.role==="recruiter" }).length}</div>
                    </div>
                    <div className="text-3xl bg-[#FFE2E2] p-2 rounded-md text-[#C10007]"><PiBuildingOffice /></div>
                </div>


                {/* <div className="flex max-h-[120px]  min-w-3xs justify-between items-center  border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px] ">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Job Posted</div>
                        <div className="text-2xl font-bold">5</div>
                    </div>
                    <div className="text-3xl bg-[#FFE2E2] p-2 rounded-md text-[#C10007]"><FaShoppingBag /></div>
                </div> */}

            </div>



            <div className="flex flex-col gap-4 pt-5 ">
                <div className="text-2xl font-bold flex  ">Recent Jobs and Candidates Listings</div>

                <div className="flex  flex-col gap-5 md:flex-row md:justify-center md:gap-5">
                    <div className="flex flex-col shadow-md border-1 border-gray-200 rounded-md gap-2 p-3" >
                        <div className="text-xl font-bold">
                            Recent Users
                        </div>

                        <div  className="overflow-scroll">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="!border-b !border-gray-200">
                                        <th className="p-3 px-3 text-left border-b-2 border-gray-300">Name</th>
                                        <th className="p-3 px-3 text-left border-b-2 border-gray-300">Email</th>
                                        <th className="p-3 px-3 text-left border-b-2 border-gray-300">Role</th>
                                        <th className="p-3 px-3 text-left border-b-2 border-gray-300">Joined</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {users.map((user) => {
                                        return <tr className="!border-b !border-gray-200">

                                            <td className="p-3 px-3 text-left ">{user.name}</td>
                                            <td className="p-3 px-3 text-left ">{user.email}</td>
                                            <td className="p-3 px-3 text-left flex-center  "><div className="p-1 h-5 flex-center rounded-md w-18 bg-green-300">{user.role}</div></td>
                                            <td className="p-3 px-3 text-left ">{formatdate(user.createdAt)}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex flex-col shadow-md border-1 border-gray-200 rounded-md gap-2 p-3">

                        <div className="text-xl font-bold">
                            Recent Jobs
                        </div>



                        <div  className="overflow-scroll">
                            {(!loading)?<table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="!border-b !border-gray-200">
                                        <th className="p-3 px-3 text-left border-b-2 border-gray-300">Title</th>
                                        <th className="p-3 px-3 text-left border-b-2 border-gray-300">Company</th>
                                        <th className="p-3 px-3 text-left border-b-2 border-gray-300">Posted</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {recentjobs.map((Job) => {
                                        return <tr className="!border-b !border-gray-200">

                                            <td className="p-3 px-3 text-left ">{Job.title}</td>
                                            <td className="p-3 px-3 text-left ">{Job.Companyname}</td>
                                            <td className="p-3 px-3 text-left ">{ formatdate(Job.createdAt)}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>:<div>loading....</div>}
                        </div>
                    </div>

                </div>
                {/* <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                 
                </div> */}
            </div>

        </div>
    </div>:<div>loading.......</div>

}
export default Admindashboard;