import { MdDelete } from "react-icons/md";

const Educationcard=({description,editactive})=>{
    if (!description) {
        return
    }
    return<> 
    {editactive?
        <div className="flex flex-col  items-start p-3 border-1 border-[#E2E5E8] rounded-lg gap-2">
             
              <textarea name="" id="" className="w-full border-none outline-none " value={description} rows={4} >enter comapny description</textarea>
              
        </div>:
             <div className="flex flex-col p-3 border-1 border-[#E2E5E8] rounded-lg ">
             <div>{description}</div>
    </div>    
        }
   
    </>
}

export default Educationcard;