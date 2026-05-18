import { useState,useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { FaChevronLeft } from "react-icons/fa";
import Select from "react-select"
import { Link, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { JobContext } from "../../../../../context/JobContext";
import { useNavigate } from "react-router-dom";


const Editjobs=()=>{
    const navigate=useNavigate();
    let [marginleft, setmarginleft] = useState(false);
  const {jobid}=useParams();

//   function sidebarspacefunc(spacesidebar) {
//       setmarginleft(spacesidebar);
//     }
    
    const {recruiterjobs,setRefresh}=useContext(JobContext);
    const singleJob = recruiterjobs.find(
        (job) => job._id ===jobid
    );
   
    const [oldjobdata,setoldjobdata]=useState(singleJob);

    const jobtype = [
        { value: "All Type", label: "All Type" },
        { value: "Full-Time", label: "Full-Time" },
        { value: "Contract", label: "Contract" },
        { value: "Remote", label: "Remote" },
        { value: "Part-Time", label: "Part-Time" },
        { value: "Internship", label: "Internship" }
    ];
    const exp_options = [
        { value: "All Type", label: "All Type" },
        { value: "0", label: "Junior (0-2)" },
        { value: "2+", label: "Mid-level(2-5)" },
        { value: "5+", label: "Senior(5+)" },
    ];



    const [errmsg, seterrmsg] = useState("");
    
    let [inputvalue, setinputvalue] = useState("");

    const { token, user } = useContext(AuthContext);
    const [jobdata, setjobdata] = useState({
        title: oldjobdata?.title,
        description: oldjobdata?.description,
        location: oldjobdata?.location,
        salary: oldjobdata?.salary,
        skillsNeeded: oldjobdata?.skillsNeeded,
        jobType: oldjobdata?.jobType,
        experience: oldjobdata?.experience,
        Companyname: user?.name
    });


    function updatejobobj(event) {
       
        setjobdata({ ...jobdata, [event.target.name]: event.target.value });
    }

    function updatejobobjbyselect(selectoption, { name }) {
        setjobdata({ ...jobdata, [name]: selectoption.value });
    }



    async function editjob(e) {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/jobs/${singleJob._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(jobdata)
            });

            const data = await res.json();
         
            console.log("edited");
            if (data.errors) {
                console.log(data.errors[0].msg);
                seterrmsg(data.errors[0].msg);
            } else{
                navigate("/jobsposted");
                   setRefresh("job was posted");
            }





        } catch (error) {
            console.log(error);
        }
    }

    return <div className="conatiner pt-18 flex  ">
        {/* <Sidebar colortext={"postjob"} sidebarspacefunc={sidebarspacefunc} /> */}
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
                <form onSubmit={editjob} action="" noValidate className="needs-validation w-full flex flex-col gap-3">
                    <div className="flex w-full text-center text-red-700">
                        {errmsg}
                    </div>
                    <div className="emaillabelinput flex flex-col ">
                        <label htmlFor="" className="form-label">
                            Job Title
                        </label>
                        <input value={jobdata.title} name="title" onChange={(event) => { updatejobobj(event); }} type="text" className="form-control" placeholder="e.g., Senior React Developer" />
                    </div>

                    <div className="emaillabelinput flex flex-col ">
                        <label htmlFor="" className="form-label">
                            Comapany Description
                        </label>
                        <textarea value={jobdata.description} onChange={(event) => { updatejobobj(event); }} name="description" type="text" rows={5} className="form-control" placeholder="Describe the job responsibilities, requirements, and benefits..." />
                    </div>

                    <div className="passwordinputlabel flex flex-col ">
                        <label htmlFor="" className="form-label">Location</label>
                        <input value={jobdata.location} onChange={(event) => { updatejobobj(event); }} name="location" type="text" className="form-control" placeholder="e.g., San Francisco, CA" />
                    </div>




                    <div className="emaillabelinput flex flex-col ">
                        <label htmlFor="" className="form-label">
                            Salary Range
                        </label>
                        <input value={jobdata.salary} onChange={(event) => { updatejobobj(event); }} name="salary" type="text" className="form-control" placeholder="e.g., $120,000 - $150,000/year" />
                    </div>

                    <div className=" flex flex-col gap-1 w-40">
                        <div className="text-md font-semibold">Job Type</div>
                        <div>
                            <Select value={jobtype.find(opt => opt.value === oldjobdata.jobType) || null} name="jobType" options={jobtype} onChange={updatejobobjbyselect} />
                        </div>
                    </div>


                    <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                        <div className="text-xl font-bold">Skills Needed</div>
                        <div className="flex flex-wrap gap-2">
                             {jobdata.skillsNeeded.map((skill) => {
                                return <div className="flex items-center gap-2"><div className="text-sm bg-black p-2 h-6 flex items-center text-white rounded-md gap-2">{skill} </div> {<div className="text-red-400" onClick={() => {
                                    let newskils = jobdata.skillsNeeded.filter((skillfil) => skillfil !== skill);
                                    setjobdata({...jobdata,skillsNeeded:newskils});
                                }}><MdDelete /></div>} </div>
                            })}
                        </div>
                        <><div className="line"></div>
                            <div className="input flex gap-2">
                                <input name="" onChange={(event) => { setinputvalue(event.target.value) }} value={inputvalue} type="text" className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
                                <div  onClick={() => {
                                    if (!inputvalue.trim()) {
                                        return;
                                    }
                                    let newskills = [...jobdata.skillsNeeded, inputvalue];
                                   
                                    setjobdata({ ...jobdata, skillsNeeded: newskills });
                                    setinputvalue("");
                                    
                                }} className="text-white bg-black px-3 py-2 w-27 flex-center text-md rounded-md font-semibold"> <button type="button" >+ Add</button></div>
                            </div></>

                    </div>



                    <div className=" flex flex-col gap-1 w-40">
                        <div className="text-md font-semibold">
                            Experience Level
                        </div>
                        <Select className="" value={exp_options.find(opt => opt.value === oldjobdata.experience) || null} name="experience" onChange={updatejobobjbyselect} options={exp_options} />

                        <div></div>
                    </div>


                    <div className="flex gap-2"> <button className="btn btn-dark">Save</button> <div className="shadow-md rounded-md px-3 py-2  hover:bg-blue-400"><Link to="/jobsposted" className=" !no-underline  !text-black ">cancel</Link></div></div>
                </form>




            </div>
        </div>
    </div> 
}

export default Editjobs;