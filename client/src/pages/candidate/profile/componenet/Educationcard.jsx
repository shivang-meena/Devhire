import { MdDelete } from "react-icons/md";

const Educationcard=({edu,eduidx,education,seteducation,editactive})=>{
    if (!editactive&&!edu.university) {
        return;
    }
    return<> 
    {editactive?
        <div className="flex flex-col  items-start p-3 border-1 border-[#E2E5E8] rounded-lg gap-2">
              <input type="text" 
              onChange={(event)=>{
                    let neweducation=[...education];
                    neweducation[eduidx].university=event.target.value;
                    seteducation(neweducation);
              }}
               value={edu.university} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
              <input type="text"
                        onChange={(event)=>{
                    let neweducation=[...education];
                    neweducation[eduidx].degree=event.target.value;
                    seteducation(neweducation);
              }} 
              value={edu.degree} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
              <input type="text"
                        onChange={(event)=>{
                    let neweducation=[...education];
                    neweducation[eduidx].graduatedat=event.target.value;
                    seteducation(neweducation);
              }}
              value={edu.graduatedat} className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
              <div onClick={()=>{
                let neweducation=education.filter((educated,index)=>index!=eduidx);
                seteducation(neweducation);
              }} 
              className="flex text-red-400 items-center border-1 border-[#E2E5E8] rounded-lg  p-2"><MdDelete/><button>Remove</button></div>
              
        </div>:
             <div className="flex flex-col p-3 border-1 border-[#E2E5E8] rounded-lg ">
        <div className="text-lg font-bold">{edu.university}</div>
        <div className="text-md ">{edu.degree}</div>
        <div className="text-md">{edu.graduatedat}</div>
    </div>    
        }
   
    </>
}

export default Educationcard;