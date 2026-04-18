import Sidebar from "../dashboard/component/Sidebar";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Select from "react-select"


const PostJob = () => {
    let [marginleft, setmarginleft] = useState(false);
    function sidebarspacefunc(spacesidebar) {
        setmarginleft(spacesidebar);
    }


    const jobtype = [
        { value: "All Type", label: "All Type" },
        { value: "Full-Time", label: "Full-Time" },
        { value: "Contract", label: "Contract" },
        { value: "Remote", label: "Remote" },
        { value: "Part-Time", label: "Part-Time" },
    ];

    
    const exp_options = [
        { value: "All Type", label: "All Type" },
        { value: "Junior (0-2)", label: "Junior (0-2)" },
        { value: "Mid-level(2-5)", label: "Mid-level(2-5)" },
        { value: "Senior(5+)", label: "Senior(5+)" },
    ];

    return <div className="conatiner pt-18 flex  ">
        <Sidebar colortext={"Dashboard"} sidebarspacefunc={sidebarspacefunc} />
        <div className={`loginpage min-h-screen z-50 items-center flex flex-col p-10  w-full  px-2  gap-4 pb-30 maincontent !no-scrollbar h-screen mr-4 ml-20 !overflow-y-auto ${marginleft ? "md:ml-69" : "ml-18"} sm:w-full md:ml-24`}>
            <div className=" flex  gap-3 items-center w-full text-start"> <FaChevronLeft />back to dashboard </div>
            <div className="loginform flex flex-center w-3xl flex-col border rounded-md p-4 gap-8   ">
                <div className="welcomeback-text flex flex-col text-center  gap-2 w-full ">
                    <div className="welcomeback text-left text-3xl font-bold">
                        Post a New Job
                    </div>
                    <div className="second-text text-left text-[#5B646F] text-lg">
                        Fill in the details to create a new job posting
                    </div>
                </div>
                <form action="" noValidate className="needs-validation w-full flex flex-col gap-3">

                    <div className="emaillabelinput flex flex-col ">
                        <label htmlFor="" className="form-label">
                            Job Title
                        </label>
                        <input type="text" className="form-control" placeholder="e.g., Senior React Developer" />
                    </div>

                    <div className="emaillabelinput flex flex-col ">
                        <label htmlFor="" className="form-label">
                            Comapany Description
                        </label>
                        <textarea type="text" rows={5} className="form-control" placeholder="Describe the job responsibilities, requirements, and benefits..." />
                    </div>

                    <div className="passwordinputlabel flex flex-col ">
                        <label htmlFor="" className="form-label">Location</label>
                        <input type="text" className="form-control" placeholder="e.g., San Francisco, CA" />
                    </div>




                    <div className="emaillabelinput flex flex-col ">
                        <label htmlFor="" className="form-label">
                            Salary Range
                        </label>
                        <input type="text" className="form-control" placeholder="e.g., $120,000 - $150,000/year" />
                    </div>

                    <div className=" flex flex-col gap-1 w-40">
                        <div className="text-md font-semibold">Job Type</div>
                        <div>
                            <Select options={jobtype} />
                        </div>
                    </div>


                    
                    <div className=" flex flex-col gap-1 w-40">
                        <div className="text-md font-semibold">
                            Experience Level
                        </div>
                        <Select className=""  options={exp_options} />

                        <div></div>
                    </div>


                   <div className="flex gap-2"> <button className="btn btn-dark">Create Account</button> <div className="shadow-md rounded-md px-3 py-2  hover:bg-blue-400"><button className="  ">cancel</button></div></div>
                </form>




            </div>
        </div>
    </div>
}

export default PostJob;