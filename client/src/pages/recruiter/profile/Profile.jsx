import { useState } from "react";
import Sidebar from "../dashboard/component/Sidebar.jsx"

import Educationcard from "./components/Educationcard.jsx";
import { MdDelete } from "react-icons/md";


const Profile = () => {
       let [marginleft, setmarginleft] = useState(false);
            function sidebarspacefunc(spacesidebar) {
                setmarginleft(spacesidebar);
            }

let [editactive,seteditactive]=useState(false);
let [name,setname]=useState("Shivang meena");
let [email,setemail]=useState("shivang@example.com");

    return <>
        <div className={`maincontent  mt-20  h-screen ${marginleft ? "md:ml-65" : "ml-17"}`}>
        <Sidebar colortext={"Company Profile"} sidebarspacefunc={sidebarspacefunc} />
      
    
        <div className="flex flex-col pr-10 pl-7 overflow-auto h-[88vh] gap-8 pb-10">

            <div className="flex  justify-between p-3 items-center rounded-xl">
                <div className="flex flex-col  gap-1">
                    <div className="text-4xl font-bold ">Company Profile</div>
                    <div className="text-md">Manage your company information</div>
                </div>
                
                {editactive?<div onClick={()=>{seteditactive(false)}} className="text-white bg-red-500 px-3 py-2 rounded-md font-semibold">
        <button>cancel</button>
                </div> :<div onClick={()=>{seteditactive(true)}} className="text-white bg-black px-3 py-2 rounded-md font-semibold">
        <button>Edit Profile</button>
                </div>}
            </div>


            <div className="flex flex-col md:flex-row px-4 py-9 pt-12 items-center shadow-md border-1 border-[#E2E5E8] rounded-lg gap-5">
                <div><img className="h-32 w-32 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shivang" alt="" /></div>
                <div className="w-full">
                    
                  
                    {editactive?<div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-1 w-full">
                              <label className="form-label" htmlFor="name"> Company Name</label>
                      <input type="text" onChange={(event)=>{setname(event.target.value)}} value={name} className=" shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" name="name" placeholder="Name" />
                        </div>
                     <div className="flex flex-col gap-1">
                         <label htmlFor="Email">Company Email</label>
                      <input type="text" name="Email" value={email} onChange={(event)=>{setemail(event.target.value)}} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" placeholder="email" />
                     </div>
                    </div>:<><div  className="text-2xl font-bold ">{name}</div>
                    <div  className="text-md" >{email}</div></>}
                </div>
            </div>

           

           


        

          <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                <div className="flex justify-between"><div  className="text-xl font-bold">Company Description</div>
                 
                 </div>
                <div className="flex flex-col ">
                      <div className="expcard flex flex-col gap-4">

                       <Educationcard description={"sdfnkasnfknaksdnfknasdfnaksnfknaskf ksnkasfkk"} editactive={editactive}/>

                        </div>  
                </div>
            </div>

        </div>

    </div></>

    

}

export default Profile;