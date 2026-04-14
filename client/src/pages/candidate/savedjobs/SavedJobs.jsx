import { IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";
import Sidebar from "../candidateDashboard/component/Sidebar";
import JobCard from "../candidateDashboard/component/JobCard";

const SavedJobs=()=>{
      let [marginleft, setmarginleft] = useState(false);
        function sidebarspacefunc(spacesidebar) {
            setmarginleft(spacesidebar);
        }

        const jobs = [
      
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
    
    
    return <>
        <div className={`maincontent  mt-20 h-screen ${marginleft ? "md:ml-68" : "ml-20"}`}>
        <Sidebar colortext={"Saved Jobs"} sidebarspacefunc={sidebarspacefunc} />
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">Saved Jobs</div>
                <div className="text-lg"><IoIosHeartEmpty/></div>
            </div>

            <div>
                

                <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] overflow-auto h-[88vh]">
                        {jobss.map((job) => <JobCard experience={job.experience} jobtype={job.type} companyname={job.companyName} role={job.role} location={job.location} salary={job.salary} skills={job.skills} posttime={job.postTime} />)}
                     
                </div>
            </div>
        </div>
    </div></>

}

export default SavedJobs;