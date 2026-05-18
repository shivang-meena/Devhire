import { LuDownload } from "react-icons/lu";
import Select from "react-select"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../../context/AuthContext";


const Applicantscard = ({ applicationdetails,refreshstatus,setrefreshstatus }) => {
   const [application,setapplication]=useState(applicationdetails);
    const statusapplication = [
        { value: "Applied", label: "Applied" },
        { value: "Reviewed", label: "Reviewed" },
        { value: "Interview", label: "Interview" },
        { value: "Selected", label: "Selected" },
        { value: "Rejected", label: "Rejected" },
    ];

    const [colorchangestatus, setcolorchangestatus] = useState(status);

    const coloraccorstatus = {
        Applied: 'bg-blue-50',
        Reviewed: 'bg-yellow-50 ',
        Interview: 'bg-purple-50 ',
        Selected: 'bg-green-50  ',
        Rejected: 'bg-red-50  '
    }

   
    console.log(application)
    //  /user/:id
    const { token } = useContext(AuthContext);
    const [userdetails, setuserdetails] = useState();

    async function applicants() {
        try {
            const res = await fetch(`http://localhost:5000/user/${application.applicantId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });


            const data = await res.json();
            console.log(data);

            setuserdetails(data.messege);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        applicants();
    }, []);


    async function changestatus(statusvalue){
        console.log(statusvalue);
        try {
      const res = await fetch(`http://localhost:5000/applications/status/${application._id}`, {
        method:"PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
           "Content-Type": "application/json"
        },
        body:JSON.stringify({
          status:statusvalue
        })
      });
      const data = await res.json();
      console.log(data);
     setapplication(data.messege);
     setrefreshstatus((prev)=>!prev);
    } catch (error) {
      console.log(error);
    }
    }

    return <>
        <div className={`shadow-md border-1 m-3 border-[#E2E5E8]  p-3 rounded-xl mt-3 flex flex-col gap-3 w-4xs sm:w-full  md:flex-row md:justify-between  ${coloraccorstatus[colorchangestatus] || "bg-white"}`} >

            <div className="flex items-center gap-3">
                <div className="h-12 border-2 border-black rounded-full ">
                    <img className="w-full h-full rounded-full" src={userdetails?.profilepicture?.url} alt="" />
                </div>
                <div>
                    <div>{userdetails?.name}</div>
                    <div>{userdetails?.email}</div>
                </div>
            </div>

            <div className="skills flex items-center gap-3">

                {(userdetails?.skills) ? userdetails?.skills.map((skill) => { return <div>{skill}</div> }) : <div>candidate have no skills</div>}
            </div>

            <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex items-center gap-2 shadow-md border-1 bg-white px-2 text-md h-10 w-30 gap-3 rounded-md">
                    <a className="outline-none border-none flex items-center gap-2 text-black !no-underline bg-white  text-md gap-3 rounded-md" href={userdetails?.resume?.url} target="_blank" rel="noopener noreferrer"><LuDownload /> Resume </a>
                </div>
                <div ><Select
                onChange={(selectedOption) => { setcolorchangestatus(selectedOption.value); changestatus(selectedOption.value)  }} 
                    options={statusapplication} value={statusapplication.find((option) => option.value === application?.status)} defaultValue={application?.status} /></div>
            </div>


        </div></>
}
export default Applicantscard;

