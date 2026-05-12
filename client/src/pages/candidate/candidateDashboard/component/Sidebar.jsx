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
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthContext";


const Sidebar = ({sidebarspacefunc,colortext}) => {
    const {token,logout,setuser,updatefullprofile}=useContext(AuthContext);
    let [full,setfull]=useState(false);
    let [color,setcolor]=useState(colortext);
    let [resume,setresume]=useState(null);
      
    
   
   async function uploadresume(file) {
    const formdata=new FormData();
    formdata.append('resume',file);
    try {
         const res=await fetch("http://localhost:5000/user/upload-resume",
            {
                method:"PUT",
                headers:{
                    "Authorization":`Bearer ${token}`
                },
                body:formdata 
            }
        );

        const data=await res.json();
       
        if(data.messege=="uploaded"){
          alert("resume uplaoded succsfully");
           console.log(data);
          localStorage.setItem('user', JSON.stringify(data.user));
            
          setuser(data.user);
        }else{
            console.log(data.messege);
        }
            console.log(data);
    } catch (err) {
        console.log(err);
    } 
    
    }

    return<> 
    <div className={`transition-all duration-300 fixed top-15 left-0 flex flex-col bg-[#0A345A] text-white p-4 gap-4 h-screen ${!full?"w-16 items-center":"w-64"} `}>
        <div className={`options-sidebar flex flex-col  gap-3  `}>


            <div className={`flex justify-start  gap-2 ${color==="Dashboard"&&"bg-[#0E5794]"} h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="/candidate/dashboard" className="text-white !no-underline"> <RiDashboardLine /> </Link>
                    
                </div>
                {full&&<div className="text font-semibold text-md">
                     <Link to="/candidate/dashboard" className="text-white !no-underline">  Dashboard</Link>
                </div>}
                
            </div>


            <div className={`flex justify-start  gap-2 ${color==="Browse Jobs"&&"bg-[#0E5794]"} h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
            <div className={`flex justify-start  gap-2  h-9 rounded-lg items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                    
                     <Link to="/candidate/browsejobs" className="text-white !no-underline"><FaShoppingBag /></Link>
                    
                </div>
               {full&&<div className="text font-semibold text-md">
                   
                     <Link to="/candidate/browsejobs" className="text-white !no-underline">Browse Jobs</Link>
                    
                </div>}
            </div>
            </div>



            <div className={`flex justify-start  gap-2 h-9 rounded-lg  ${color==="My Applications"&&"bg-[#0E5794]"} items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="/candidate/myapllications" className="text-white !no-underline"> <IoMdCheckboxOutline /></Link>

                </div>
                {full&&<div className="text font-semibold text-md">
                     <Link to="/candidate/myapllications" className="text-white !no-underline">My Applications</Link>
                </div>}
            </div>


            <div   className={`flex justify-start  gap-2 h-9 rounded-lg  ${color==="Saved Jobs"&&"bg-[#0E5794]"} items-center ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                   
                     <Link to="/candidate/saved-jobs" className="text-white !no-underline"> <IoIosHeartEmpty /></Link>

                </div>
              {full&&<div className="text font-semibold text-md">
                 
                     <Link to="/candidate/saved-jobs" className="text-white !no-underline">Saved Jobs</Link>
                    
                </div>}
            </div>


            <div className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${color==="My Profile"&&"bg-[#0E5794]"} ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
                <div className="icon text-2xl">
                 
                     <Link to="/candidate/userprofile" className="text-white !no-underline">    <GoPerson /></Link>

                </div>
              {full&&<div className="text font-semibold text-md">
                   
                     <Link to="/candidate/userprofile" className="text-white !no-underline"> My Profile</Link>

                </div>}
            </div>


            <div  className={`flex justify-start  gap-2 h-9 rounded-lg items-center  ${color==="Upload Resume"&&"bg-[#0E5794]"}  ${!full?"w-11 flex-center":" w-full pl-2 "}`}>
               
                  
                    <label htmlFor="resume" className=" icon text-2xl text-white !no-underline">     <FiUpload /></label>
                     <input type="file" id="resume" onChange={(event)=>{ const file=event.target.files[0]; uploadresume(file);}} className="h-0 w-0" />
                
               {full&&<div className="text font-semibold text-md">
                     
                     <label htmlFor="resume"  className="text-white !no-underline">Upload Resume</label>
                      
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
            <div onClick={logout} className="icon text-2xl">
            <Link to={"/"}   className="text-white !no-underline"> <LuLogOut /></Link> 
            </div>
              {full&&<div onClick={logout}  className="text font-semibold text-md">
                  <Link className="text-white !no-underline" to={"/"}>Logout</Link> 
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