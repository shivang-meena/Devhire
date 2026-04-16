import { TbUsers } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";

const JobCard = () => {
    return <>

        <div className="jobcard flex flex-col p-6  border-2 border-[#E2E5E8]   rounded-lg gap-8 max-w-170 md:max-w-100">

            <div className="type-button flex items-center justify-between">
                 <div className="job-namerole flex font-semibold text-xl">
                    Senior Frontend Devloper
                </div>
                <div className="type-job   text-[#008236] border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#DBFCE7]">
                    active
                </div>
            </div>

          


           
                <div className="location-salary flex flex-col ">
                    <div className="location flex gap-2 items-center">
                        < TbUsers/> 24 Applicants
                    </div>
                    <div className="salary flex  text-[#797b7c] gap-2 items-center ">
                       <IoTimeOutline/> Posted 2 days ago
                    </div>
                </div>

           

            <div className=" bg-[#0A345A] text-white text-md p-1 border rounded-md  time-posted-applybutton flex-center">
                <button>View Details</button>
            </div>
        </div>

    </>
}

export default JobCard