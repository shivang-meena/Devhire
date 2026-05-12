import { MdLocationPin } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { useEffect } from "react";

const Applicationcard = ({jobid,role,company,location,applydate,status}) => {

    const { token } = useContext(AuthContext);
    let [job, setjob] = useState();
    let [loader, setloader] = useState(true);
    const Jobgetter = async () => {
        setloader(true);
        const res = await fetch(`http://localhost:5000/Jobs/${jobid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jobdata = await res.json();
        console.log(jobdata);
        setjob(jobdata.job);
        setloader(false);
    }

    useEffect(() => { Jobgetter() }, []);



    return <>{loader?<div></div>:
        <div className="shadow-md border-1 m-3 border-[#E2E5E8] p-3 rounded-xl mt-3 flex flex-col gap-3 w-full md:flex-row md:justify-between md:items-center">

               <div className="flex flex-col gap-3">

                   <div className="flex items-center gap-3">
                <div className="p-3 bg-[#E7EBEE] h-10 flex-center rounded-md w-10">
                 T
                </div>
                <div>
                    <div className="text-xl font-bold">{(job?.title) ? job.title : <div>no title</div>}</div>
                    <div className="text-md ">{(job?.Companyname) ? job.Companyname : <div>no Companyname</div>}</div>
                </div>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row">
                <div className="flex gap-2 items-center">
                 <MdLocationPin/>{job.location}
                </div>
                <div className="flex gap-2 items-center">
                 <CiCalendar/> {applydate}
                </div>
            </div>

               </div>


            <div className="flex flex-col gap-2 md:gap-5 md:flex-row  md:items-center">
                <div className="flex-center p-1 text-sm bg-[#F3E8FF] h-7 w-17 border rounded-sm">
                 {status}
                </div>
                <div className="text-red-500 text-lg" >
             <MdDelete/> 
                </div>
            </div>

        </div>}
    </>
}
export default Applicationcard;