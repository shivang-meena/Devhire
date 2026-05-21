import { MdDelete } from "react-icons/md";


const Expericecard=({userdata,setuserdata,expidx,company,role,duration,setexperience,experience})=>{
    return <>   

    
    <div className="flex flex-col transition-all items-start p-3 border-1 border-[#E2E5E8] rounded-lg gap-2">
          <input type="text"
          placeholder="Company name"
          onChange={(event)=>{
                let newexperience=[...experience];
                newexperience[expidx].companyname=event.target.value;
                setexperience(newexperience);
                setuserdata({...userdata,experience:newexperience});
          }}
           value={company} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
          <input type="text"
          placeholder="Position"
                    onChange={(event)=>{
                let newexperience=[...experience];
                newexperience[expidx].role=event.target.value;
                setexperience(newexperience);
                setuserdata({...userdata,experience:newexperience});
          }} 
          value={role} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
          <input type="text"
          placeholder="duration Ex: 2023-2026"
                    onChange={(event)=>{
                let newexperience=[...experience];
                newexperience[expidx].duration=event.target.value;
                setexperience(newexperience);
                setuserdata({...userdata,experience:newexperience});
          }}
          value={duration} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
          <div
          onClick={()=>{
                let newexp=experience.filter((educated,index)=>index!=expidx);
                setexperience(newexp);
                setuserdata({...userdata,experience:newexp});
              }}  
          className="flex text-red-400 items-center border-1 border-[#E2E5E8] rounded-lg  p-2"><MdDelete/><button>Remove</button></div>
          
    </div>
     {/* <div className="flex flex-col p-3 border-1 border-[#E2E5E8] rounded-lg ">
        <div className="text-lg font-bold">{company}</div>
        <div className="text-md ">{role}</div>
        <div className="text-md">{duration}</div>
    </div> */}
    

    </>
          
}

export default Expericecard;