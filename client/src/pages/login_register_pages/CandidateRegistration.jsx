import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CandidateRegistration = () => {
    let navigate=useNavigate();
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        password: "",
        skills: "",
        experience: "",
        education: ""
    });

    const [err, seterr] = useState("");
    async function handleregister(event) {
        event.preventDefault();

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
                <input required type="email" onChange={(event) => { setuserdata({ ...userdata, email: event.target.value }); console.log(event.target.value); seterr("") }} className="form-control" placeholder="Enter Email" />
            </div>



            <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Password
                </label>
                <input required onChange={(event) => {  setuserdata({ ...userdata, password: event.target.value }); seterr(""); }} type="password" className="form-control" placeholder="Enter Password" />
            </div>


            <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Skills
                </label>
                <textarea required onChange={(event) => { setuserdata({ ...userdata, skills: event.target.value }); console.log(event.target.value); seterr("") }} type="text" className="form-control" placeholder="Skills..." />
            </div>

            <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Work Experience
                </label>
                <textarea required onChange={(event) => {setuserdata({ ...userdata, experience: event.target.value }); seterr(""); }} type="text" rows={5} className="form-control" placeholder="Work Experience..." />
            </div>


            <div className="emaillabelinput flex flex-col ">
                <label htmlFor="" className="form-label">
                    Education
                </label>
                <textarea required onChange={(event) =>{ 
                    setuserdata({...userdata, education: event.target.value }); seterr("");
                  }} type="text" rows={5} className="form-control" placeholder="Education..." />
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