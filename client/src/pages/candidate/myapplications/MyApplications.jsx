import { useState } from "react";
import Applicationcard from "./component/Applicationcard";
import Sidebar from "../candidateDashboard/component/Sidebar";

const MyApplications = () => {
    let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }

const Applicationsdatafake = [
  {
    id: 1,
    role: "Senior Software Developer",
    company: "TechNova Solutions",
    location: "Bangalore",
    postedDate: "2026-04-10",
    status: "Applied"
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "CodeCraft Labs",
    location: "Hyderabad",
    postedDate: "2026-04-08",
    status: "Interview"
  },
  {
    id: 3,
    role: "Backend Engineer",
    company: "DataSphere Inc",
    location: "Pune",
    postedDate: "2026-04-05",
    status: "Rejected"
  },
  {
    id: 4,
    role: "Full Stack Developer",
    company: "DevMatrix",
    location: "Delhi",
    postedDate: "2026-04-12",
    status: "Reviewed"
  },
  {
    id: 5,
    role: "Junior Software Engineer",
    company: "NextGen Tech",
    location: "Chennai",
    postedDate: "2026-04-09",
    status: "Selected"
  },
  {
    id: 6,
    role: "React Developer",
    company: "UIWorks",
    location: "Mumbai",
    postedDate: "2026-04-11",
    status: "Applied"
  },
  {
    id: 7,
    role: "Node.js Developer",
    company: "ServerSide Pvt Ltd",
    location: "Noida",
    postedDate: "2026-04-06",
    status: "Interview"
  },
  {
    id: 8,
    role: "Software Engineer Intern",
    company: "InnoTech",
    location: "Kolkata",
    postedDate: "2026-04-07",
    status: "Rejected"
  },
  {
    id: 9,
    role: "DevOps Engineer",
    company: "CloudOps",
    location: "Gurgaon",
    postedDate: "2026-04-03",
    status: "Reviewed"
  },
  {
    id: 10,
    role: "MERN Stack Developer",
    company: "StackFlow",
    location: "Ahmedabad",
    postedDate: "2026-04-02",
    status: "Selected"
  }
];

let [Applicationsdata,setapplicationsdata]=useState(Applicationsdatafake);
let [clicked,setclicked]=useState("All");
function filterapplications(type) {
    if (type === "All") {
        setapplicationsdata(Applicationsdatafake);
    } else {
        const filtered = Applicationsdatafake.filter((app) => app.status === type);
        setapplicationsdata(filtered);
    }
}
    return (<><div className={`maincontent  mt-20 h-screen ${marginleft ? "md:ml-68" : "ml-20"}`}>
        <Sidebar colortext={"My Applications"} sidebarspacefunc={sidebarspacefunc} />
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">My Applications</div>
                <div className="text-lg">Track the status of all your job applications</div>
            </div>

            <div>
                <div className="flex flex-wrap gap-2 transition-all">
                  <div onClick={()=>{filterapplications("All"); setclicked("All")}} className={` ${clicked==="All"&& "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm `}>
                    All (2)
                  </div>
                   <div onClick={()=>{filterapplications("Applied");setclicked("Applied")}} className={` ${clicked==="Applied"&& "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
                   Applied
                  </div>
                  <div onClick={()=>{filterapplications("Reviewed");setclicked("Reviewed")}} className={` ${clicked==="Reviewed"&& "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
                   Reviewed
                  </div>
                   <div onClick={()=>{filterapplications("Interview");setclicked("Interview")}} className={` ${clicked==="Interview"&& "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
                   Interview
                  </div>
                  <div onClick={()=>{filterapplications("Selected");setclicked("Selected")}} className={` ${clicked==="Selected"&& "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
                   Selected
                  </div>
                   <div onClick={()=>{filterapplications("Rejected");setclicked("Rejected")}} className={` ${clicked==="Rejected"&& "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
                   Rejected
                  </div>
                 
                </div>

                <div className="flex flex-col h-[80vh] overflow-y-auto">
                      {Applicationsdata.map((application)=>{
                        return <Applicationcard key={application.id} role={application.role} company={application.company} location={application.location} applydate={application.postedDate} status={application.status}/>
                      })}
                </div>
            </div>
        </div>
    </div></>)
}

export default MyApplications;