import { useState } from "react";
import Sidebar from "../dashboard/component/Sidebar";
import JobCard from "./components/JobCard";


const MyJobs=()=>{
   let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }
    return <div className="conatiner pt-18 flex ">
        <Sidebar colortext={"Dashboard"} sidebarspacefunc={sidebarspacefunc} />
        <div className={`maincontent !no-scrollbar h-screen !w-full mr-4 ml-20 !overflow-y-auto ${marginleft ? "md:ml-69" : "ml-18"}  md:ml-24`}>


            <div className="flex flex-col ">
                <div className="text-[33px] font-bold ">My Jobs</div>
                <div className="flex items-center gap-2">Manage your job postings and view applications</div>
            </div>


            <div className="three-cards  flex flex-col  my-6 gap-4 md:flex-row md:w-full justify-center ">


                <div className="flex max-h-[120px] flex-center min-w-3xs  items-center flex-col border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    
                        <div className="text-md">Total Jobs</div>
                        <div className="text-4xl font-bold ">3</div>
                    
                   
                </div>

                

                <div className="flex max-h-[120px]  min-w-3xs  flex-center flex-col border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    
                        <div className="text-md">Active Postings</div>
                        <div className="text-4xl font-bold">8</div>
                    
                </div>


                   <div className="flex max-h-[120px]  min-w-3xs flex-center flex-col  border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px] ">
                        <div className="text-md">This Month Hires</div>
                        <div className="text-4xl font-bold">105</div>
                </div>

            </div>



            <div className="flex flex-col gap-4 pt-5">
                <div className="text-2xl font-bold flex  ">Recent Job Listings</div>
                <div className=" flex flex-col w-full gap-3 ">
                  <JobCard/>
                  <JobCard/>
                  <JobCard/>

                </div>
            </div>

        </div>
    </div>
}
export default MyJobs;