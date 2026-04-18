import { LuDownload } from "react-icons/lu";
import Select from "react-select"
import {useState} from "react"


const Applicantscard=({id=6, candidateName='Lisa Anderson', jobTitle= 'Full Stack Developer', status= 'Interview', appliedDate= '2024-04-05', email='lisa@example.com'})=>{
  
     const statusapplication= [
        { value: "Applied", label: "Applied" },
        { value: "Reviewed", label: "Reviewed" },
        { value: "Interview", label: "Interview" },
        { value: "Selected", label: "Selected" },
        { value: "Rejected", label: "Rejected" },
    ];
  
    const [colorchangestatus,setcolorchangestatus]=useState(status);

     const coloraccorstatus={
        Applied:'bg-blue-50',
        Reviewed:'bg-yellow-50 ',
        Interview:'bg-purple-50 ',
        Selected:'bg-green-50  ',
        Rejected:'bg-red-50  '
     }

  const defaultSelection = statusapplication.find(opt => opt.value === status);

  return<>
   <div className={`shadow-md border-1 m-3 border-[#E2E5E8]  p-3 rounded-xl mt-3 flex flex-col gap-3 w-4xs sm:w-full  md:flex-row md:justify-between  ${coloraccorstatus[colorchangestatus]||"bg-white"}`} id={id}>
          
        <div className="flex items-center gap-3">
            <div  className="h-12 border-2 border-black rounded-full ">
              <img className="w-full h-full rounded-full" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=$${candidateName}`} alt="" />
            </div>
            <div>
                <div>{candidateName}</div>
                <div>{email}</div>
            </div>
        </div>

       <div className="skills flex items-center gap-3">
           <div>java</div>
           <div>javascript</div>
           <div>pythone</div>
       </div>

       <div className="flex flex-col gap-2 md:flex-row">
           <div className="flex items-center gap-2 shadow-md border-1 bg-white px-2 text-md h-10 w-30 gap-3 rounded-md"><LuDownload/> Resume</div>
           <div ><Select 
 options={statusapplication} defaultValue={defaultSelection} onChange={(selectedOption)=>{setcolorchangestatus(selectedOption.value); console.log(selectedOption.value);}}  /></div>
       </div>


    </div></>
}
export default Applicantscard;

