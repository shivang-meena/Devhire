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


const Sidebar = ({sidebarspacefunc}) => {
    let [full,setfull]=useState(true);

    return<> 
    <div className={`transition-all duration-300 fixed top-15 left-0 flex flex-col bg-[#0A345A] text-white p-4 gap-4 h-screen ${!full?"w-16 items-center":"w-64"} `}>
        <div className={`options-sidebar flex flex-col  gap-3  `}>


            <div className={`flex justify-start  gap-2 bg-[#0E5794] h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    <RiDashboardLine />
                </div>
                {full&&<div className="text font-semibold text-md">
                    Dashboard
                </div>}
                
            </div>


            <div className={`flex justify-start  gap-2  h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    <FaShoppingBag />
                </div>
               {full&&<div className="text font-semibold text-md">
                    Browse Jobs
                </div>}
            </div>


            <div className={`flex justify-start  gap-2 h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    <IoMdCheckboxOutline />
                </div>
                {full&&<div className="text font-semibold text-md">
                    My Applications
                </div>}
            </div>


            <div   className={`flex justify-start  gap-2 h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    <IoIosHeartEmpty />
                </div>
              {full&&<div className="text font-semibold text-md">
                    Saved Jobs
                </div>}
            </div>


            <div className={`flex justify-start  gap-2 h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    <GoPerson />
                </div>
              {full&&<div className="text font-semibold text-md">
                    My Profile
                </div>}
            </div>


            <div  className={`flex justify-start  gap-2 h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    <FiUpload />
                </div>
               {full&&<div className="text font-semibold text-md">
                    Upload Resume
                </div>}
            </div>


            <div  className={`flex justify-start  gap-2 h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                <IoSettingsOutline />
            </div>
                {full&&<div className="text font-semibold text-md">
                    Settings
                </div>}
            </div>

        </div>

        <div className={`flex justify-start  gap-2 h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
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