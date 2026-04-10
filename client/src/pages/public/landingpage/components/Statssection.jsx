import { BsBagCheck } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { MdOutlineLaptopChromebook } from "react-icons/md";
const Statssection=()=>{
    return<>
          <div className="main-div-statssection w-screen p-20 flex-center flex-col bg-[#0A345A] gap-8 sm:flex-row sm:gap-60">
            <div className="job-posts-cnt text-white flex-center flex-col gap-1">
                    <div className="logo text-3xl bg-[#22496B] h-16 w-16 flex-center rounded-full ">
                        <BsBagCheck />
                    </div>
                    <div className="cnt-job-posts text-3xl  font-bold">
                   500+
                    </div>
                    <div className="Job-text text-[#CED6DE]">
                        Jobs Posted
                    </div>
            </div>
            <div className="active-candidate  text-white flex-center flex-col gap-1">
                 <div className="logo text-3xl bg-[#22496B] h-16 w-16 flex-center rounded-full ">
                 <BsPeople />
                    </div>
                    <div className="cnt-candidate-posts text-3xl  font-bold">
                     1000+
                    </div>
                    <div className="candidate-text text-[#CED6DE]">
                        active candidate
                    </div>
            </div>
            <div className="recruter-cnt  text-white flex-center flex-col gap-1">
                    <div className="logo text-3xl bg-[#22496B] h-16 w-16 flex-center rounded-full">
                    <MdOutlineLaptopChromebook/>
                    </div>
                    <div className="cnt-recruter-posts text-3xl  font-bold">
                      200+
                    </div>
                    <div className="recruter-text  text-[#CED6DE]">
                        recruiter
                    </div>
            </div>
          </div>
    </>
}

export default Statssection;