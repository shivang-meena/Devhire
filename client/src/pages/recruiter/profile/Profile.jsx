import { useContext, useState } from "react";
import Sidebar from "../dashboard/component/Sidebar.jsx"

import Educationcard from "./components/Educationcard.jsx";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../../../context/AuthContext.jsx";


const Profile = () => {
       let [marginleft, setmarginleft] = useState(false);
            function sidebarspacefunc(spacesidebar) {
                setmarginleft(spacesidebar);
            }

            const { token, user, setuser,updatefullprofile} = useContext(AuthContext);
let [editactive,seteditactive]=useState(false);
let [name,setname]=useState(user.name);
let [email,setemail]=useState(user.email);
let [companyDescription,setdescription]=useState(user.companyDescription);


const [image,setimage]=useState(null);
 function updateprofile(e) {
    e.preventDefault();
    updatefullprofile({name,email,companyDescription});
    seteditactive(false);
 }
 console.log(user);

 
 async function updatepic(e) {
    e.preventDefault();
    const formdata=new FormData();
    formdata.append('profilepicture',image);
    try {
         const res=await fetch("http://localhost:5000/user/upload-picture",
            {
                method:"PUT",
                headers:{
                    "Authorization":`Bearer ${token}`
                },
                body:formdata 
            }
        );

        const data=await res.json();
        console.log(data);
          localStorage.setItem('user', JSON.stringify(data.messege));
            setuser(data.messege);
            updatefullprofile(data.messege);
    } catch (err) {
        console.log(err);
    }
 }

    return <>
        <div className={`maincontent  mt-20  h-screen ${marginleft ? "md:ml-65" : "ml-17"}`}>
        <Sidebar colortext={"My Profile"} sidebarspacefunc={sidebarspacefunc} />
      
    
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



            {editactive ? <form className="flex gap-3" onSubmit={updatepic} ><label
                                htmlFor="image"
                                className="bg-blue-500 text-white px-1 py-1 text-xs flex-center text-center border rounded h-10 w-30  cursor-pointer"
                            >
                                update profile Image
                            </label> <input type="file" id="image" onChange={(e)=>{
                                setimage(e.target.files[0]);
                            }} className=" h-0 w-0" />
                            <button className="btn btn-success">upload</button>
                            </form> : <div></div>}
                  


                  <form  onSubmit={updateprofile}>

            <div className="flex flex-col md:flex-row px-4 py-9 pt-12 items-center shadow-md border-1 border-[#E2E5E8] rounded-lg gap-5">
                <div><img className="h-32 w-32 rounded-full" src={`${user?.profilepicture?.url}`} alt="no" /></div>
                <div className="w-full">
                    
                  
                    {editactive?<div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-1 w-full">
                              <label className="form-label" htmlFor="name"> Company Name</label>
                      <input type="text"  onChange={(event)=>{setname(event.target.value)}} value={name} className=" shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" name="name" placeholder="Name" />
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

                       <Educationcard setdescription={setdescription}  description={companyDescription} editactive={editactive}/>

                        </div>  
                </div>

            </div>
                {editactive&&<button className="btn btn-danger" type="submit">SAVE</button>}
                  </form>



        </div>

    </div></>

    

}

export default Profile;