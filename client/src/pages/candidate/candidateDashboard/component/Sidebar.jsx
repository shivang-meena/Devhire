import { RiDashboardLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = ({sidebarspacefunc,colortext}) => {
    let [full,setfull]=useState(false);
    let [color,setcolor]=useState(colortext);
    return<> 
    <div className={`transition-all duration-300 fixed top-15 left-0 flex flex-col bg-[#0A345A] text-white p-4 gap-4 h-screen ${!full?"w-16 items-center":"w-64"} `}>
        <div className={`options-sidebar flex flex-col  gap-3  `}>


            <div className={`flex justify-start  gap-2 ${color==="Dashboard"&&"bg-[#0E5794]"} h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="/user-dashboard" className="text-white !no-underline"> <RiDashboardLine /> </Link>
                    
                </div>
                {full&&<div className="text font-semibold text-md">
                   
                     <Link to="/user-dashboard" className="text-white !no-underline">  Dashboard</Link>
                    
                </div>}
                
            </div>


            <div className={`flex justify-start  gap-2 ${color==="Browse Jobs"&&"bg-[#0E5794]"} h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
            <div className={`flex justify-start  gap-2  h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    
                     <Link to="/user-browsejobs" className="text-white !no-underline"><FaShoppingBag /></Link>
                    
                </div>
               {full&&<div className="text font-semibold text-md">
                   
                     <Link to="/user-browsejobs" className="text-white !no-underline">Browse Jobs</Link>
                    
                </div>}
            </div>
            </div>



            <div className={`flex justify-start  gap-2 h-9 rounded-lg  ${color==="My Applications"&&"bg-[#0E5794]"} items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="/myapllications" className="text-white !no-underline"> <IoMdCheckboxOutline /></Link>

                </div>
                {full&&<div className="text font-semibold text-md">
                     <Link to="/myapllications" className="text-white !no-underline">My Applications</Link>
                </div>}
            </div>


            <div   className={`flex justify-start  gap-2 h-9 rounded-lg  ${color==="Saved Jobs"&&"bg-[#0E5794]"} items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="/saved-jobs" className="text-white !no-underline"> <IoIosHeartEmpty /></Link>

                </div>
              {full&&<div className="text font-semibold text-md">
                 
                     <Link to="/saved-jobs" className="text-white !no-underline">Saved Jobs</Link>
                    
                </div>}
            </div>


            <div className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${color==="My Profile"&&"bg-[#0E5794]"} ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                 
                     <Link to="/myapllications" className="text-white !no-underline">    <GoPerson /></Link>

                </div>
              {full&&<div className="text font-semibold text-md">
                   
                     <Link to="/myapllications" className="text-white !no-underline"> My Profile</Link>

                </div>}
            </div>


            <div  className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${color==="Upload Resume"&&"bg-[#0E5794]"}  ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                  
                     <Link to="/myapllications" className="text-white !no-underline">     <FiUpload /></Link>

                </div>
               {full&&<div className="text font-semibold text-md">
                  
                     <Link to="/myapllications" className="text-white !no-underline">   Upload Resume</Link>
                    
                </div>}
            </div>


            <div  className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${color==="Settings"&&"bg-[#0E5794]"} ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
              
                     <Link to="/myapllications" className="text-white !no-underline">  <IoSettingsOutline /></Link>

            </div>
                {full&&<div className="text font-semibold text-md">
                    
                     <Link to="/myapllications" className="text-white !no-underline">Settings</Link>

                    
                </div>}
            </div>

        </div>

        <div className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
            <div className="icon text-2xl">
            <LuLogOut /> 
            </div>
              {full&&<div className="text font-semibold text-md">
                    Logout
                </div>}
        </div>
        <div className="sidebar-closeopen flex-center justify-start  w-full gap-2 h-12 pl-2 rounded-lg items-center">
                {!full&&<div className="text font-semibold text-md">
            <FaAngleRight onClick={()=>{setfull(true); sidebarspacefunc(true)}} />    
                </div>}
                {full&&<div className="text font-semibold text-md">
                 < FaChevronLeft onClick={()=>{setfull(false); sidebarspacefunc(false)}}/>
                </div>}
                
        </div>
    </div>
    </>
}
export default Sidebar;