import { RiDashboardLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";


import { IoAdd } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";

const Sidebar = ({sidebarspacefunc,colortext}) => {
    let [full,setfull]=useState(false);
    let [color,setcolor]=useState(colortext);
    return<> 
    <div className={`transition-all duration-300 fixed top-15 left-0 flex flex-col bg-[#0A345A] text-white p-4 gap-4 h-screen ${!full?"w-16 items-center":"w-64"} `}>
        <div className={`options-sidebar flex flex-col  gap-3  `}>


            <div className={`flex justify-start  gap-2 ${color==="Dashboard"&&"bg-[#0E5794]"} h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="" className="text-white !no-underline"> <RiDashboardLine /> </Link>
                    
                </div>
                {full&&<div className="text font-semibold text-md">
                   
                     <Link to="" className="text-white !no-underline">  Dashboard</Link>
                    
                </div>}
                
            </div>


            <div className={`flex justify-start  gap-2 ${color==="Browse Jobs"&&"bg-[#0E5794]"} h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
          
                <div className="icon text-2xl">
                    
                     <Link to="" className="text-white !no-underline text-3xl "><IoAdd/></Link>
                    
                </div>
               {full&&<div className="text font-semibold text-md">
                   
                     <Link to="" className="text-white !no-underline">Post Job</Link>
                    
                </div>}
            
            </div>



            <div className={`flex justify-start  gap-2 h-9 rounded-lg  ${color==="My Applications"&&"bg-[#0E5794]"} items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="" className="text-white !no-underline"> <BsFileEarmarkText /></Link>

                </div>
                {full&&<div className="text font-semibold text-md">
                     <Link to="" className="text-white !no-underline">My Applications</Link>
                </div>}
            </div>


            <div   className={`flex justify-start  gap-2 h-9 rounded-lg  ${color==="Saved Jobs"&&"bg-[#0E5794]"} items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="" className="text-white !no-underline"> < TbUsers/></Link>

                </div>
              {full&&<div className="text font-semibold text-md">
                 
                     <Link to="" className="text-white !no-underline">Candidates</Link>
                    
                </div>}
            </div>


            <div className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${color==="My Profile"&&"bg-[#0E5794]"} ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                 
                     <Link to="" className="text-white !no-underline">    <GoPerson /></Link>

                </div>
              {full&&<div className="text font-semibold text-md">
                   
                     <Link to="" className="text-white !no-underline"> Company Profile</Link>

                </div>}
            </div>


         


            <div  className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${color==="Settings"&&"bg-[#0E5794]"} ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
              
                     <Link to="" className="text-white !no-underline">  <IoSettingsOutline /></Link>

            </div>
                {full&&<div className="text font-semibold text-md">
                    
                     <Link to="" className="text-white !no-underline">Settings</Link>

                    
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