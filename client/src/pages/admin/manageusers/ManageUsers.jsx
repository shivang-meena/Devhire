
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
import Sidebar from "../component/sidebar/Sidebar.jsx";
const ManageUsers= () => {

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


  
    const [users, setusers] = useState(usersdata);


    return <div className="conatiner pt-18 flex  ">
        <Sidebar colortext={"Dashboard"} sidebarspacefunc={sidebarspacefunc} />
        <div className={`maincontent !no-scrollbar h-screen mr-4 ml-20 !overflow-y-auto ${marginleft ? "md:ml-69" : "ml-18"} sm:w-full md:ml-24`}>


            <div className="flex flex-col ">
                <div className="text-[33px] font-bold ">Manage Users </div>
                <div className="flex items-center gap-2">View, search, and manage all platform users.</div>
            </div>


          <div>
              <div></div>
          </div>


            <div className="flex flex-col gap-4 pt-5 ">
                <div className="text-2xl font-bold flex">Users</div>

              
                    <div className="flex flex-col shadow-md border-1 border-gray-200 rounded-md gap-2 p-3 w-full" >
                        <div className="text-xl font-bold">
                            Recent Users
                        </div>

                        <div  className="overflow-scroll w-full">
                            <table className="w-full border-collapse text-md">
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
                                            <td className="p-3 px-3 text-left   "><div className="p-1 h-5 flex-center rounded-md w-18 bg-green-300">{user.role}</div></td>
                                            <td className="p-3 px-3 text-left ">{user.joinedDate}</td>
                                            <td className="flex h-full  gap-2 p-3 px-3 text-left ">
                                                <div  className="bg-green-300 rounded-md p-2" ><button>UnBlock</button></div> 
                                                <div  className=" bg-red-400 rounded-md p-2" ><button >Delete</button></div>
                                                
                                                </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                

                {/* <div className="grid gap-5   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                 
                </div> */}
            </div>

        </div>
    </div>

}
export default ManageUsers;