import { useState } from "react";
import Sidebar from "./component/Sidebar";
import { SlCalender } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import JobCard from "./component/Jobcard";



const RecruiterDashboard=()=>{
   let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }
    return <div className="conatiner pt-18 flex  ">
        <Sidebar colortext={"Dashboard"} sidebarspacefunc={sidebarspacefunc} />
        <div className={`maincontent !no-scrollbar h-screen mr-4 ml-20 !overflow-y-auto ${marginleft ? "md:ml-69" : "ml-18"} sm:w-full md:ml-24`}>


            <div className="flex flex-col ">
                <div className="text-[33px] font-bold ">Welcome back, Recruiter!</div>
                <div className="flex items-center gap-2">Here's an overview of your recruitment activity</div>
            </div>


            <div className="three-cards  flex flex-col  my-6 gap-4 md:flex-row md:w-full justify-center ">


                <div className="flex max-h-[120px] min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Job Posted</div>
                        <div className="text-2xl font-bold">3</div>
                    </div>
                    <div className="text-3xl bg-[#DBEAFE] p-2 rounded-md"><IoMdCheckboxOutline /></div>
                </div>

                <div className="flex max-h-[120px]  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Applicants</div>
                        <div className="text-2xl font-bold">347</div>
                    </div>
                    <div className="text-3xl bg-[#DBFCE7] p-2 rounded-md text-[#008236]"><FaShoppingBag /></div>
                </div>

                <div className="flex max-h-[120px]  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Active Postings</div>
                        <div className="text-2xl font-bold">8</div>
                    </div>
                    <div className="text-3xl bg-[#FFE2E2] p-2 rounded-md text-[#C10007]"><IoIosHeartEmpty /></div>
                </div>


                   <div className="flex max-h-[120px]  min-w-3xs justify-between items-center  border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px] ">
                    <div className="flex flex-col  ">
                        <div className="text-xs">This Month Hires</div>
                        <div className="text-2xl font-bold">5</div>
                    </div>
                    <div className="text-3xl bg-[#FFE2E2] p-2 rounded-md text-[#C10007]"><IoIosHeartEmpty /></div>
                </div>

            </div>



            <div className="flex flex-col gap-4 pt-5">
                <div className="text-2xl font-bold flex  ">Recent Job Listings</div>
                <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
            </div>

        </div>
    </div>
}
export default RecruiterDashboard;