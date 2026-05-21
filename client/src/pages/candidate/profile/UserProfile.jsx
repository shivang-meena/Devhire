import { useContext, useState } from "react";
import Sidebar from "../candidateDashboard/component/Sidebar";
import Expericecard from "./componenet/Expericecard";
import Educationcard from "./componenet/Educationcard";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../../../context/AuthContext";


const UserProfile = () => {
    let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }

    const { token, user, setuser,updatefullprofile} = useContext(AuthContext);

    // const user=JSON.parse(localStorage.getItem('user'));
    let [editactive, seteditactive] = useState(false);
    let [name, setname] = useState(user.name);
    let [email, setemail] = useState(user.email);
    let [skills, setskills] = useState(user.skills);
    let [inputvalue, setinputvalue] = useState("");

    let [experience, setexperice] = useState([{ companyname: "Tech group", role: "senior frontend", duration: "2022-2026" }, { companyname: "Tech group", role: "senior frontend", duration: "2022-2026" }]);
    //  let [experience,setexperice]=useState(user.experience);
    let [education, seteducation] = useState([{ university: "vikram university", degree: "BCA", graduatedate: "2023" }, { university: "vikram university", degree: "BCA", graduatedate: "2023" }]);


let [image,setimage]=useState(null);

    async function updatedeatils(e) {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/user/update-profile",
                {
                    method: "Put",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(
                        {
                            name,
                            email,
                            skills,
                            experience,
                            education
                        }
                    )

                }
            );

            const data = await res.json();

            console.log("jasdkfnamfadflmasdlfmklansflasndflnaslfnalsnfkans");
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data.messege));
            setuser(data.messege);
        } catch (error) {
            console.log(error);
        }
    }

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

//  async function updatefullprofile(userdata){
  
//         try {
//             const res = await fetch("http://localhost:5000/user/update-profile",
//                 {
//                     method: "Put",
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Authorization": `Bearer ${token}`
//                     },
//                     body: JSON.stringify(
//                         {
//                           ...userdata
//                         }
//                     )

//                 }
//             );

//             const data = await res.json();

//             console.log("full profole was updated ");
//             console.log(data);
//             localStorage.setItem('user', JSON.stringify(data.messege));
//             setuser(data.messege);
//         } catch (error) {
//             console.log(error);
//         }
//  }

    return <>
        <div className={`maincontent  mt-20  h-screen ${marginleft ? "md:ml-65" : "ml-17"}`}>
            <Sidebar colortext={"My Profile"} sidebarspacefunc={sidebarspacefunc} />
                                     


                <div className="flex flex-col pr-10 pl-7 overflow-auto h-[88vh] gap-8 pb-10">

                    <div className="flex  justify-between p-3 items-center rounded-xl">
                        <div className="flex flex-col  gap-1">
                            <div className="text-4xl font-bold ">My Profile</div>
                            <div className="text-md">Manage your professional information</div>
                        </div>

                        {editactive ?
                            <button onClick={() => { seteditactive(false) }} className="text-white bg-red-500 px-3 py-2 rounded-md font-semibold" type="button">cancel</button>
                            :
                            <button onClick={() => { seteditactive(true) }} className="text-white bg-black px-3 py-2 rounded-md font-semibold" type="button">Edit Profile</button>
                        }
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
                       

            <form action="" onSubmit={updatedeatils}>


                    <div className="flex flex-col md:flex-row px-4 py-9 pt-12 items-center shadow-md border-1 border-[#E2E5E8] rounded-lg gap-5">
                        <div><img className="h-32 w-32 rounded-full" src={`${user?.profilepicture?.url}`} alt="" />

                        </div>
                        <div className="w-full">


                            {editactive ? <div className="flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input type="text" onChange={(event) => { setname(event.target.value) }} value={name} className=" shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" name="name" placeholder="Name" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="Email">Email</label>
                                    <input type="text" name="Email" value={email} onChange={(event) => { setemail(event.target.value) }} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" placeholder="email" />
                                </div>
                            </div> : <><div className="text-2xl font-bold ">{name}</div>
                                <div className="text-md" >{email}</div></>}
                        </div>
                    </div>

                    <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                        <div className="text-xl font-bold">Skills</div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => {
                                return <div className="flex items-center gap-2"><div className="text-sm bg-black p-2 h-6 flex items-center text-white rounded-md gap-2">{skill} </div> {editactive && <div className="text-red-400" onClick={() => {
                                    let newskils = skills.filter((skillfil) => skillfil !== skill);
                                    setskills(newskils);
                                }}><MdDelete /></div>} </div>
                            })}
                        </div>
                        {editactive && <><div className="line"></div>
                            <div className="input flex gap-2">
                                <input onChange={(event) => { setinputvalue(event.target.value) }} type="text" className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
                                <div onClick={() => {
                                    if (!inputvalue) {
                                        return;
                                    }
                                    let newskills = [...skills, inputvalue];

                                    setskills(newskills);
                                }} className="text-white bg-black px-3 py-2 w-27 flex-center text-md rounded-md font-semibold"> <button type="button" >+ Add</button></div>
                            </div></>}

                    </div>

                    <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                        <div className="flex justify-between"><div className="text-xl font-bold">Work Experience</div>
                            {editactive && <div className="p-2 shadow-md rounded-md"
                                onClick={() => {
                                    let newexp = [...experience, { companyname: "", role: "", duration: "" }];
                                    setexperice(newexp);
                                }
                                }
                            >Add Experience</div>}
                        </div>
                        <div className="flex flex-col ">
                            <div className="expcard flex flex-col gap-4">


                                {experience.map((exp, index) => <Expericecard editactive={editactive} key={index} expidx={index} experience={experience} setexperience={setexperice} company={exp.companyname} role={exp.role} duration={exp.duration} />)}
                            </div>
                        </div>
                    </div>




                    <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                        <div className="flex justify-between"><div className="text-xl font-bold">Education</div>
                            {editactive && <div className="p-2 shadow-md rounded-md"
                                onClick={() => {
                                    let newedu = [...education, { university: "", degree: "", graduatedate: "" }];
                                    seteducation(newedu);
                                }
                                }
                            >Add Education</div>}
                        </div>
                        <div className="flex flex-col ">
                            <div className="expcard flex flex-col gap-4">

                                {education.map((edu, index) => <Educationcard eduidx={index} editactive={editactive} key={index} edu={edu} education={education} seteducation={seteducation} />)}

                            </div>
                        </div>



                    </div>

                        <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-center flex-col gap-2 mt-3 p-3 gap-3">
                            <div>Resume</div>
                            {user.resume?user.resume.name:<div>There is no resume upload from sidbar</div>}
                        </div>

            </form>
                </div>

                <button type="submit" className="btn btn-success">save</button>

        </div></>



}

export default UserProfile;