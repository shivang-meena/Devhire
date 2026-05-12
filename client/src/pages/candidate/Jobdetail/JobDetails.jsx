import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const JobDetails = () => {
    // { companyname, role, location, salary, skills, posttime, jobtype, experience }
    const { token } = useContext(AuthContext);
    const { jobid } = useParams();
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


   async function applyjob() {
          const res = await fetch(`http://localhost:5000/applications/apply/${jobid}`, {
            method:"POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const application = await res.json();
        console.log("applied ");
        alert("applied ");
        console.log(application);
    }
    return <>{loader ? <div className="mt-50 ml-50">laoding.....</div> :
        <div>
            <div className="flex  items-center gap-3  h-20 p-4 text-md shadow-sm" ><FaArrowLeft /> <div className="text-md"> Back to Browse Jobs</div></div>
            <div className="parent-div flex-center">

                <div className="px-3 max-w-3xl">


                    <div className="shadow-md flex flex-col gap-3 border rounded-md p-3 mt-5">
                        <div className="flex flex-col gap-1 ">
                            <div className="text-3xl font-bold">{(job?.title) ? job.title : <div>no title</div>}</div>
                            <div className="text-xl font-bold">{(job?.Companyname) ? job.Companyname : <div>no Companyname</div>}</div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap max-w-xl gap-3 justify-between">
                                <div className="flex items-center gap-2 text-[18px]"><MdLocationPin />{job.location}</div>
                                <div className="flex items-center gap-2 text-[18px]"><BiDollar />{job.salary}</div>
                                <div className="flex items-center gap-2 text-[18px]"><FaShoppingBag />{job.jobType}</div>
                            </div>
                            <div className="border rounded-md h-10 flex items-center justify-center bg-[#0A345A]  text-white sm:max-w-[150px]">
                                <button onClick={()=>{applyjob()}}>Apply now </button>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md flex flex-col gap-2 border rounded-md p-3 mt-5" >
                        <div className="text-2xl font-bold">About This Job</div>
                        <div>{job.description}
                            {/* We are looking for an experienced Senior React Developer to join our growing team. You will be responsible for building and maintaining our customer-facing applications using React and modern web technologies.

                You will work closely with our design and backend teams to create seamless user experiences. This is an excellent opportunity to work on challenging projects and grow your career with a fast-growing tech company.

                Responsibilities:

                • Design and implement scalable React components

                • Collaborate with product and design teams

                • Optimize application performance

                • Mentor junior developers

                • Write clean, maintainable code

                Requirements:

                • 5+ years of professional React development experience

                • Strong understanding of JavaScript ES6+

                • Experience with state management (Redux, Zustand)

                • Knowledge of REST APIs and GraphQL

                • Git proficiency */}
                        </div>
                    </div>

                    <div className="shadow-md flex flex-col gap-2 border rounded-md p-3 mt-5 mb-4">
                        <div>Required Skills</div>
                        <div className="flex flex-wrap gap-2">
                            {job.skillsNeeded.map((skill) => {
                                return <div className="border border-[#d3d4d4] rounded-xl font-semibold  flex-center max-w-30 max-h-10 px-3 py-2 text-md">{skill}</div>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </>
}

export default JobDetails;