import { useEffect, useState } from "react"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoFunnelOutline } from "react-icons/io5";
import Select from "react-select";
import Sidebar from "../candidateDashboard/component/Sidebar";
import JobCard from "./component/JobCard";
import { useContext } from "react";
import { JobContext } from "../../../../context/JobContext";
import { AuthContext } from "../../../../context/AuthContext";

const JobBrowse = () => {
         const {Jobs}=useContext(JobContext);
    const exp_options = [
        { value: "All Type", label: "All Type" },
        { value: "Junior", label: "Junior" },
        { value: "Mid-level", label: "Mid-level" },
        { value: "Senior", label: "Senior" },
    ];
    const jobtype = [
        { value: "All Type", label: "All Type" },
        { value: "full-Time", label: "Full-Time" },
        { value: "Contract", label: "Contract" },
        { value: "Remote", label: "Remote" },
        { value: "Part-Time", label: "Part-Time" },
    ];



    let [jobss, setjobss] = useState([]);
    let [globalSearch, setglobalSearch] = useState("");
    let [exp, setexp] = useState("All Type");
    let [type, settype] = useState("All Type");
    let [SearchLocation, setLocSearch] = useState("");
 useEffect(()=>{
    if (Jobs) {
        setjobss(Jobs);
        console.log(Jobs);
    }
 },[Jobs]);

    function filterjob(type, exp, Search,globalSearchfun) {
        setexp(exp);
        settype(type);
        setLocSearch(Search);
        setglobalSearch(globalSearchfun);

        let newjobs = Jobs.filter((a) => {
            const typematch = (type === "All Type") || (type.toLowerCase() === a.jobType.toLowerCase());

            let [min, max] = a.experience.split("-").map(Number);

            let expmathc = true;

            if (exp === "Junior") {
                expmathc = min <= 2;
            } else if (exp === "Mid-level") {
                expmathc = min <= 4;
            } else if (exp === "Senior") {
                expmathc = min >= 5;
            }
            let Searchmatch = a.location.toLowerCase().includes(Search.toLowerCase());

              let jobvalues = Object.values(a).join(" ").toLowerCase();
            const isMatch = jobvalues.includes(globalSearchfun.toLowerCase());

            return expmathc && typematch && Searchmatch && isMatch;
        }

        );
        setjobss(newjobs);
    }



    let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }
    return <>
        <div className="conatiner pt-18 flex  ">
            <Sidebar colortext={"Browse Jobs"} sidebarspacefunc={sidebarspacefunc}/>
            <div className={`maincontent !no-scrollbar h-screen w-full mr-4 ml-20 overflow-y-auto ${marginleft ? "md:ml-66" : "ml-18"} sm:w-full md:ml-24`}>


                <div className="flex flex-col ">
                    <div className="text-[33px] font-bold ">Browse Jobs</div>
                    <div className="flex items-center gap-2 text-lg"> Find and apply to your dream role</div>
                </div>





                <div className="flex flex-col  py-4 px-0 gap-3 md:flex-row">

                    <div className="flex items-center gap-2 w-full  border-2 border-[#F2F3F4]  rounded-md pl-2 pr-0 h-10 ">
                        <HiMagnifyingGlass />
                        <input onChange={(event)=>{filterjob(type,exp,SearchLocation,event.target.value);}} className="border-none outline-none w-full" type="text" placeholder="Browse Jobs Find and apply to your dream role " />
                    </div>
                    <div className="flex min-w-[110px] justify-center border-2 border-[#F2F3F4]  rounded-md  p-1 "><button className="flex gap-2 items-center"><IoFunnelOutline /> Reset</button></div>
                </div>


                <div className="flex flex-col  py-4 px-0 gap-3  border-2 border-[#F2F3F4]  rounded-md px-2 md:flex-row  md:justify-between px-4">
                    <div className=" flex flex-col gap-1">
                        <div className="text-md font-semibold">Job Type</div>
                        <div>
                            <Select onChange={(selectedOption) => { filterjob(selectedOption.value, exp, SearchLocation,globalSearch) }} options={jobtype} />
                        </div>
                    </div>

                    <div className=" flex flex-col gap-1">
                        <div className="text-md font-semibold">
                            Experience Level
                        </div>
                        <Select onChange={(selectedOption) => { filterjob(type, selectedOption.value, SearchLocation,globalSearch) }} options={exp_options} />

                        <div></div>
                    </div>

                    <div className=" flex flex-col gap-1">
                        <div className="text-md font-semibold">Location</div>
                        <div className="flex items-center gap-2 w-full  border-2 border-[#F2F3F4]  rounded-md pl-2 pr-0 h-10 ">
                            <input onChange={(event) => { filterjob(type, exp,event.target.value,globalSearch) }} className="border-none outline-none w-full" type="text" placeholder="Search by location..." />
                        </div>

                    </div>
                </div>




                <div className="flex flex-col gap-4 pt-5">
                    <div className="text-sm  flex  ">Found 8 jobs</div>
                    <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">

                        {jobss.map((job) => <JobCard companyname={job.companyname} role={job.title} location={job.location} salary={job.salary}  skills={job.skillsNeeded} posttime={job.createdAt} jobtype={job.jobType} experience={job.experience}  />)}
                    </div>
                </div>

            </div>
        </div>
    </>
}
export default JobBrowse;