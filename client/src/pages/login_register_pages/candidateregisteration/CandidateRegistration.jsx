import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Expericecard from "./component/Expericecard.jsx";
import Educationcard from "./component/Educationcard.jsx";

const CandidateRegistration = () => {
    let navigate=useNavigate();

    
    let [experience, setexperice] = useState([]
        // [{ companyname: "Tech group", role: "senior frontend", duration: "2022-2026" }, { companyname: "Tech group", role: "senior frontend", duration: "2022-2026" }]
    );
    //  let [experience,setexperice]=useState(user.experience);
    let [education, seteducation] = useState([]
        // [{ university: "vikram university", degree: "BCA", graduatedate: "2023" }, { university: "vikram university", degree: "BCA", graduatedate: "2023" }]

    );
  let [skills, setskills] = useState([]);
    let [inputvalue, setinputvalue] = useState("");


    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        password: "",
        skills: skills,
        experience: experience,
        education:education
    });

    const [err, seterr] = useState("");
    async function handleregister(event) {
        event.preventDefault();
       
       console.log(userdata+" form handler of the thign ");
        const res = await fetch("http://localhost:5000/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...userdata, role: "candidate" })
        });

        const result = await res.json();
        if (result.errors) {
            console.log(result.errors[0].msg);
            seterr(result.errors[0].msg)
            return;
        }
        if(result.message==="Email already exists"){
          seterr(result.message);
          return;
        }

        navigate("/login");
       
    }
    return <div className="loginpage min-h-screen w-full flex-center pt-30 pb-30 px-2">

        <div className="loginform flex-center flex-col w-120 h-auto border border-[#E2E5E8] px-10 gap-8 rounded-lg shadow-lg p-10">
            <div className="welcomeback-text flex flex-col text-center  gap-2 w-full">
                <div className="welcomeback text-left text-3xl font-bold">
                    Candidate  Sign Up
                </div>
                <div className="second-text text-left text-[#5B646F] text-lg">
                    Join thousands of developers finding their dream jobs
                </div>
            </div>
            <div className="text-red-400">{err}</div>

            <form action="" onSubmit={handleregister}   className="needs-validation w-full flex flex-col gap-3">
            <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Full Name
                </label>
                <input required type="text" onChange={ (event) => { setuserdata({ ...userdata, name: event.target.value }); seterr("") }} className="form-control" placeholder="Enter Full Name" />
            </div>

            <div className="passwordinputlabel flex flex-col ">
                <label htmlFor="" className="form-label">Email Address</label>
                <input required type="email" onChange={(event) => { setuserdata({ ...userdata, email: event.target.value }); console.log(userdata); seterr("") }} className="form-control" placeholder="Enter Email" />
            </div>



            <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Password
                </label>
                <input required onChange={(event) => {  setuserdata({ ...userdata, password: event.target.value }); seterr(""); }} type="password" className="form-control" placeholder="Enter Password" />
            </div>


            {/* <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Skills
                </label>
                <textarea required onChange={(event) => { setuserdata({ ...userdata, skills: event.target.value }); console.log(event.target.value); seterr("") }} type="text" className="form-control" placeholder="Skills..." />
            </div> */}

                                  <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                                      <div className="text-xl font-bold">Skills</div>
                                      <div className="flex flex-wrap gap-2">
                                          {skills.map((skill) => {
                                              return <div className="flex items-center gap-2"><div className="text-sm bg-black p-2 h-6 flex items-center text-white rounded-md gap-2">{skill} </div> { <div className="text-red-400" onClick={() => {
                                                  let newskils = skills.filter((skillfil) => skillfil !=skill);
                                                  setskills(newskils);
                                                  setuserdata({...userdata,skills:newskils});
                                              }}><MdDelete /></div>} </div>
                                          })}
                                      </div>
                                      <div className="line"></div>
                                          <div className="input flex gap-2">
                                              <input onChange={(event) => { setinputvalue(event.target.value) }} type="text" className="shadow-md border-1 border-[#E2E5E8] rounded-md w-full h-8 p-2" />
                                              <div onClick={() => {
                                                  if (!inputvalue) {
                                                      return;
                                                  }
                                                  let newskills = [...skills, inputvalue];
              
                                                  setskills(newskills);
                                                  setuserdata({...userdata,skills:newskills});
                                              }} className="text-white bg-black px-3 py-2 w-27 flex-center text-md rounded-md font-semibold"> <button type="button" >+ Add</button></div>
                                          </div>
              
                                  </div>
              


            {/* <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Work Experience
                </label>
                <textarea required onChange={(event) => {setuserdata({ ...userdata, experience: event.target.value }); seterr(""); }} type="text" rows={5} className="form-control" placeholder="Work Experience..." />
            </div> */}


             <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                        <div className="flex justify-between"><div className="text-xl font-bold">Work Experience</div>
                            {<div className="p-2 shadow-md rounded-md"
                                onClick={() => {
                                    let newexp = [...experience, { companyname: "", role: "", duration: "" }];
                                    setexperice(newexp);
                                }
                                }
                            >Add Experience</div>}
                        </div>
                        <div className="flex flex-col ">
                            <div className="expcard flex flex-col gap-4">


                                {experience.map((exp, index) => <Expericecard userdata={userdata} setuserdata={setuserdata}   key={index} expidx={index} experience={experience} setexperience={setexperice} company={exp.companyname} role={exp.role} duration={exp.duration} />)}
                            </div>
                        </div>
                    </div>


{/* 
            <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Education
                </label>
                <textarea required onChange={(event) =>{ 
                    setuserdata({...userdata, education: event.target.value }); seterr("");
                  }} type="text" rows={5} className="form-control" placeholder="Education..." />
            </div> */}



                <div className="shadow-md border-1 border-[#E2E5E8] rounded-lg flex flex-col p-3 gap-3">
                        <div className="flex justify-between"><div className="text-xl font-bold">Education</div>
                            {<div className="p-2 shadow-md rounded-md"
                                onClick={() => {
                                    let newedu = [...education, { university: "", degree: "", graduatedate: "" }];
                                    seteducation(newedu);
                                }
                                }
                            >Add Education</div>}
                        </div>
                        <div className="flex flex-col ">
                            <div className="expcard flex flex-col gap-4">

                                {education.map((edu, index) => <Educationcard userdata={userdata} setuserdata={setuserdata} eduidx={index} key={index} edu={edu} education={education} seteducation={seteducation} />)}

                            </div>
                        </div>



                    </div>
                    


            <button className="btn btn-dark">Create Account</button>
        </form>


        <div className="donthaveacc  flex flex-col text-center ">
            Already have an account? Sign In
        </div>

    </div>
    </div >
}
export default CandidateRegistration;