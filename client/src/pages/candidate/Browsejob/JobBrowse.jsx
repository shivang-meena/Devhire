import { useState } from "react"
import { SlCalender } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { IoFunnelOutline } from "react-icons/io5";
import Select from "react-select";
import Sidebar from "../candidateDashboard/component/Sidebar";
import JobCard from "./component/JobCard";

const JobBrowse = () => {
    const exp_options = [
        { value: "All Type", label: "All Type" },
        { value: "Junior", label: "Junior" },
        { value: "Mid-level", label: "Mid-level" },
        { value: "Senior", label: "Senior" },
    ];
    const jobtype = [
        { value: "All Type", label: "All Type" },
        { value: "Full-Time", label: "Full-Time" },
        { value: "Contract", label: "Contract" },
        { value: "Remote", label: "Remote" },
        { value: "Part-Time", label: "Part-Time" },
    ];

    const jobs = [
        {
            companyName: "TechNova Pvt Ltd",
            role: "Frontend Developer",
            location: "Bangalore",
            salary: "6-8 LPA",
            skills: ["React", "CSS", "JavaScript"],
            type: "Full-Time",
            experience: "1-3",
            postTime: "2 days ago"
        },
        {
            companyName: "InnoSoft Solutions",
            role: "Backend Developer",
            location: "Hyderabad",
            salary: "7-10 LPA",
            skills: ["Node.js", "Express", "MongoDB"],
            type: "Contract",
            experience: "2-4",
            postTime: "1 day ago"
        },
        {
            companyName: "CodeCraft Systems",
            role: "Full Stack Developer",
            location: "Pune",
            salary: "8-12 LPA",
            skills: ["React", "Node", "MySQL"],
            type: "Remote",
            experience: "3-5",
            postTime: "3 days ago"
        },
        {
            companyName: "DataMinds",
            role: "Data Analyst",
            location: "Delhi",
            salary: "5-7 LPA",
            skills: ["Python", "SQL", "Excel"],
            type: "Part-Time",
            experience: "1-2",
            postTime: "5 days ago"
        },
        {
            companyName: "Cloudify Tech",
            role: "DevOps Engineer",
            location: "Chennai",
            salary: "9-14 LPA",
            skills: ["AWS", "Docker"],
            type: "Full-Time",
            experience: "3-6",
            postTime: "4 days ago"
        },
        {
            companyName: "NextGen AI",
            role: "ML Engineer",
            location: "Bangalore",
            salary: "10-15 LPA",
            skills: ["Python", "TensorFlow"],
            type: "Remote",
            experience: "2-5",
            postTime: "6 days ago"
        },
        {
            companyName: "WebWorks",
            role: "UI/UX Designer",
            location: "Mumbai",
            salary: "4-6 LPA",
            skills: ["Figma", "UX"],
            type: "Part-Time",
            experience: "1-3",
            postTime: "2 days ago"
        },
        {
            companyName: "SecureNet",
            role: "Cybersecurity Analyst",
            location: "Noida",
            salary: "6-9 LPA",
            skills: ["Security", "Networking"],
            type: "Full-Time",
            experience: "2-4",
            postTime: "1 week ago"
        },
        {
            companyName: "FinEdge",
            role: "Software Engineer",
            location: "Gurgaon",
            salary: "7-11 LPA",
            skills: ["Java", "Spring"],
            type: "Contract",
            experience: "2-5",
            postTime: "3 days ago"
        },
        {
            companyName: "AppSphere",
            role: "Mobile Developer",
            location: "Kolkata",
            salary: "5-8 LPA",
            skills: ["Flutter", "Firebase"],
            type: "Remote",
            experience: "1-3",
            postTime: "2 days ago"
        },
        {
            companyName: "BrightTech",
            role: "QA Engineer",
            location: "Ahmedabad",
            salary: "4-7 LPA",
            skills: ["Testing", "Selenium"],
            type: "Full-Time",
            experience: "1-4",
            postTime: "4 days ago"
        },
        {
            companyName: "NetCore Systems",
            role: "System Admin",
            location: "Chandigarh",
            salary: "5-9 LPA",
            skills: ["Linux", "Networking"],
            type: "Contract",
            experience: "2-5",
            postTime: "1 week ago"
        },
        {
            companyName: "AlphaTech",
            role: "Frontend Developer",
            location: "Delhi",
            salary: "6-9 LPA",
            skills: ["React", "Tailwind"],
            type: "Remote",
            experience: "2-4",
            postTime: "3 days ago"
        },
        {
            companyName: "BetaSoft",
            role: "Backend Developer",
            location: "Pune",
            salary: "7-10 LPA",
            skills: ["Node", "MongoDB"],
            type: "Full-Time",
            experience: "2-5",
            postTime: "5 days ago"
        },
        {
            companyName: "Gamma Solutions",
            role: "Full Stack Developer",
            location: "Bangalore",
            salary: "9-13 LPA",
            skills: ["React", "Node"],
            type: "Part-Time",
            experience: "3-6",
            postTime: "1 day ago"
        },
        {
            companyName: "Delta Corp",
            role: "Data Scientist",
            location: "Hyderabad",
            salary: "10-16 LPA",
            skills: ["Python", "ML"],
            type: "Remote",
            experience: "3-6",
            postTime: "6 days ago"
        },
        {
            companyName: "Epsilon Ltd",
            role: "UI Designer",
            location: "Mumbai",
            salary: "4-7 LPA",
            skills: ["Figma", "Design"],
            type: "Contract",
            experience: "1-3",
            postTime: "2 days ago"
        },
        {
            companyName: "Zeta Systems",
            role: "DevOps Engineer",
            location: "Chennai",
            salary: "8-12 LPA",
            skills: ["AWS", "CI/CD"],
            type: "Full-Time",
            experience: "3-5",
            postTime: "4 days ago"
        },
        {
            companyName: "Eta Tech",
            role: "Software Tester",
            location: "Noida",
            salary: "4-6 LPA",
            skills: ["Manual Testing"],
            type: "Part-Time",
            experience: "1-2",
            postTime: "3 days ago"
        },
        {
            companyName: "Theta Solutions",
            role: "Android Developer",
            location: "Gurgaon",
            salary: "6-9 LPA",
            skills: ["Kotlin", "Android"],
            type: "Remote",
            experience: "2-4",
            postTime: "2 days ago"
        },
        {
            companyName: "Iota Labs",
            role: "iOS Developer",
            location: "Pune",
            salary: "7-10 LPA",
            skills: ["Swift"],
            type: "Full-Time",
            experience: "2-5",
            postTime: "5 days ago"
        },
        {
            companyName: "Kappa Tech",
            role: "Cloud Engineer",
            location: "Bangalore",
            salary: "9-14 LPA",
            skills: ["AWS", "Azure"],
            type: "Contract",
            experience: "3-6",
            postTime: "6 days ago"
        },
        {
            companyName: "Lambda Corp",
            role: "Database Admin",
            location: "Delhi",
            salary: "8-12 LPA",
            skills: ["SQL", "DBMS"],
            type: "Remote",
            experience: "3-5",
            postTime: "4 days ago"
        },
        {
            companyName: "Mu Systems",
            role: "Network Engineer",
            location: "Chennai",
            salary: "6-10 LPA",
            skills: ["Networking"],
            type: "Full-Time",
            experience: "2-4",
            postTime: "1 week ago"
        },
        {
            companyName: "Nu Tech",
            role: "Support Engineer",
            location: "Hyderabad",
            salary: "4-6 LPA",
            skills: ["Support", "Troubleshooting"],
            type: "Part-Time",
            experience: "1-3",
            postTime: "2 days ago"
        }
    ];

    let [jobss, setjobss] = useState(jobs);
    let [globalSearch, setglobalSearch] = useState("");
    let [exp, setexp] = useState("All Type");
    let [type, settype] = useState("All Type");
    let [SearchLocation, setLocSearch] = useState("");
    function filterjob(type, exp, Search,globalSearchfun) {
        setexp(exp);
        settype(type);
        setLocSearch(Search);
        setglobalSearch(globalSearchfun);
        
        let newjobs = jobs.filter((a) => {
            const typematch = (type === "All Type") || (type === a.type);

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
            <Sidebar sidebarspacefunc={sidebarspacefunc} />
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
                            <input onChange={(event) => { filterjob(type, exp, event.target.value,globalSearch) }} className="border-none outline-none w-full" type="text" placeholder="Search by location..." />
                        </div>

                    </div>
                </div>




                <div className="flex flex-col gap-4 pt-5">
                    <div className="text-sm  flex  ">Found 8 jobs</div>
                    <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">

                        {jobss.map((job) => <JobCard experience={job.experience} jobtype={job.type} companyname={job.companyName} role={job.role} location={job.location} salary={job.salary} skills={job.skills} posttime={job.postTime} />)}
                    </div>
                </div>

            </div>
        </div>
    </>
}
export default JobBrowse;