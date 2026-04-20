import { SlCalender } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiBuildingOffice } from "react-icons/pi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi";



import { useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
const Admindashboard = () => {

    let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }


    const usersdata = [
        {
            name: "John Doe",
            email: "john@example.com",
            role: "Candidate",
            joinedDate: "2024-01-15"
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            role: "Admin",
            joinedDate: "2023-11-10"
        },
        {
            name: "Rahul Sharma",
            email: "rahul@example.com",
            role: "candidate",
            joinedDate: "2024-02-01"
        },
        {
            name: "Priya Verma",
            email: "priya@example.com",
            role: "Candidate",
            joinedDate: "2024-03-05"
        },
        {
            name: "Amit Kumar",
            email: "amit@example.com",
            role: "Manager",
            joinedDate: "2023-12-20"
        }
    ];

    const recentJobs = [
        {
            title: "Senior React Developer",
            company: "Tech Corp",
            posted: "2024-01-15"
        },
        {
            title: "UX/UI Designer",
            company: "Design Studio",
            posted: "2024-01-14"
        },
        {
            title: "Full Stack Developer",
            company: "StartUp Inc",
            posted: "2024-01-13"
        },
        {
            title: "Product Manager",
            company: "Innovation Labs",
            posted: "2024-01-12"
        },
        {
            title: "Data Analyst",
            company: "Analytics Pro",
            posted: "2024-01-11"
        }
    ];

    const [recentjobs, setrecentjobs] = useState(recentJobs);
    const [users, setusers] = useState(usersdata);


    return <div className="conatiner pt-18 flex  ">
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
                        <div className="text-2xl font-bold">1,034</div>
                    </div>
                    <div className="text-3xl bg-[#DBEAFE] p-2 rounded-md">< FaUsers /></div>
                </div>

                <div className="flex max-h-[120px]  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Candidates</div>
                        <div className="text-2xl font-bold">347</div>
                    </div>
                    <div className="text-3xl bg-[#DBFCE7] p-2 rounded-md text-[#008236]"><GiGraduateCap /></div>
                </div>

                <div className="flex max-h-[120px]  min-w-3xs justify-between items-center border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px]">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Recruiters</div>
                        <div className="text-2xl font-bold">353</div>
                    </div>
                    <div className="text-3xl bg-[#FFE2E2] p-2 rounded-md text-[#C10007]"><PiBuildingOffice /></div>
                </div>


                <div className="flex max-h-[120px]  min-w-3xs justify-between items-center  border border shadow-sm rounded-xl h-40 px-4 md:min-w-[220px] ">
                    <div className="flex flex-col  ">
                        <div className="text-xs">Total Job Posted</div>
                        <div className="text-2xl font-bold">5</div>
                    </div>
                    <div className="text-3xl bg-[#FFE2E2] p-2 rounded-md text-[#C10007]"><FaShoppingBag /></div>
                </div>

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
                                            <td className="p-3 px-3 text-left ">{user.joinedDate}</td>
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
                            <table className="w-full border-collapse text-sm">
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
                                            <td className="p-3 px-3 text-left ">{Job.company}</td>
                                            <td className="p-3 px-3 text-left ">{Job.posted}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                {/* <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                 
                </div> */}
            </div>

        </div>
    </div>

}
export default Admindashboard;