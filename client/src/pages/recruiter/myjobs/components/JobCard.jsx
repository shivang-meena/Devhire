import { IoPersonAdd } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

let JobCard = () => {
    return <>
        <div className=" flex flex-col p-6  border-2 border-[#E2E5E8]   rounded-lg gap-4 w-full ">
            <div className="flex gap-3 items-center"> 
                <div className="flex font-bold text-xl">Senior React Developer</div>
                <div className="type-job   text-[#008236] border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#DBFCE7]">Open</div>
            </div>



      <div className="flex flex-col gap-5 md:flex-row">
                   
            <div className="sm:flex">

                <div className="flex items-center ">
                    <div>
                        <div className="text-[#797b7c] ">Location</div>
                        <div className="w-[110px] font-medium text-[15px]">San Francisco, CA</div>
                    </div>
                    <div>
                        <div className=" text-[#797b7c]">Salary</div>
                        <div  className="w-[110px] font-medium text-[15px]">$120k - $160k</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div>
                        <div className=" text-[#797b7c]">Type</div>
                        <div  className="w-[110px] font-medium text-[15px]">Full-time</div>
                    </div>
                    <div>
                        <div className=" text-[#797b7c]">Posted</div>
                        <div  className="w-[110px] font-medium text-[15px]">4/10/2024</div>
                    </div>
                </div>

            </div>


            <div className="flex px-3 pr-4 flex items-center bg-[#F3F5F8] items-center gap-3 border shadow-md   rounded-lg">
                <div className="text-xl" ><IoPersonAdd /></div>
                <div className=" text-[15px] flex flex-col text-center">
                    <div >Applicants</div>
                    <div className="text-3xl font-bold">24</div>
                </div>
            </div>


      </div>

            <div className="flex flex-col md:flex-row gap-2">

                <div className="flex gap-2 items-center">
                    <div className="flex items-center border-1 border-[#E2E5E8] shadow-md px-4 py-1 text-md gap-2 rounded-sm">
                        <div><BiSolidEdit /></div>
                        <div>Edit</div>
                    </div>
                    <div className="flex items-center shadow-md px-3 border-1 border-[#E2E5E8] py-1 text-md gap-2 rounded-sm">
                        <div><IoPersonAdd /></div>
                        <div>Applicants</div>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div className="flex items-center border-1 border-[#E2E5E8] shadow-md px-4 py-1 text-md gap-2 rounded-sm">
                        <div><MdToggleOff/></div>
                        <div>Close</div>
                    </div>
                    <div className="flex text-red-400 items-center border-1 border-[#E2E5E8] shadow-md px-4 py-1 text-md gap-2 rounded-sm">
                        <div><RiDeleteBin6Line/></div>
                        <div>Delete</div>
                    </div>
                </div>


            </div>


        </div>
    </>
}

export default JobCard;