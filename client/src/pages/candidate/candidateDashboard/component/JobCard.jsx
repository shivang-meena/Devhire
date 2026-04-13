import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";

const JobCard=()=>{
    return <>
       
                    <div className="jobcard flex flex-col p-6  border-2 border-[#E2E5E8]   rounded-lg gap-8 max-w-170 md:max-w-100">
       
                       <div className="type-button flex justify-between">
                           <div className="T-button border border-[#E2E5E8]  h-12 w-12 flex-center rounded-sm bg-[#E2E5E8] text-xl">
                               T
                           </div>
                           <div className="type-job border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#E2E5E8]">
                               full-time
                           </div>
                       </div>
       
                       <div className="jobrole-company-name flex flex-col gap-1">
                           <div className="job-namerole flex font-semibold text-xl">
                               Senior Frontend Devloper
                           </div>
                           <div className="company-name">TechFlow Inc.</div>
                       </div>
       
       
                       <div className="skill-plussalary flex flex-col gap-1">
                           <div className="location-salary flex text-[#797b7c] justify-between ">
                               <div className="location flex justify-between items-center">
                                   <MdLocationPin /> San Frachisco,CA
                               </div>
                               <div className="salary flex justify-between items-center ">
                                   <BiDollar />144k <BiDollar />180k
                               </div>
                           </div>
       
       
                           <div className="skills flex gap-2">
                               <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs">Typescript</div>
                               <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >React</div>
                               <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >Next.js</div>
                           </div>
                       </div>
       
                       <div className="time-posted-applybutton flex justify-between">
                           <div className="time-posted text-[#797b7c]">
                               2 days ago
                           </div>
                           <div className="applynowbtn">
                               Apply Now
                           </div>
                       </div>
                   </div>
                    
    </> 
}

export default JobCard