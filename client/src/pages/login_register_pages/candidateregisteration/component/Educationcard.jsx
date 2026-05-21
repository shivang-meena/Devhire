import { MdDelete } from "react-icons/md";

const Educationcard=({userdata,setuserdata,edu,eduidx,education,seteducation})=>{
   
    return<> 
    
        <div className="flex flex-col  items-start p-3 border-1 border-[#E2E5E8] rounded-lg gap-2">
              <input type="text" 
              placeholder="university..."
              onChange={(event)=>{
                    let neweducation=[...education];
                    neweducation[eduidx].university=event.target.value;
                    seteducation(neweducation);
                    setuserdata({...userdata,education:neweducation});
              }}
               value={edu.university} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
              <input type="text"
              placeholder="degree(BCA,Bsc...)"
                        onChange={(event)=>{
                    let neweducation=[...education];
                    neweducation[eduidx].degree=event.target.value;
                    seteducation(neweducation);
                    setuserdata({...userdata,education:neweducation});

              }} 
              value={edu.degree} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
              <input type="text"
              placeholder="duration Ex:- 2023-2026"
                        onChange={(event)=>{
                    let neweducation=[...education];
                    neweducation[eduidx].graduatedate=event.target.value;
                    seteducation(neweducation);
                    setuserdata({...userdata,education:neweducation});
              }}
              value={edu.graduatedate} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
              <div onClick={()=>{
                let neweducation=education.filter((educated,index)=>index!=eduidx);
                seteducation(neweducation);
                    setuserdata({...userdata,education:neweducation});
              }} 
              className="flex text-red-400 items-center border-1 border-[#E2E5E8] rounded-lg  p-2"><MdDelete/><button>Remove</button></div>
              
        </div>   
        
   
    </>
}

export default Educationcard;