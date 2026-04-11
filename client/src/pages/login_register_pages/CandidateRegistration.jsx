const CandidateRegistration=()=>{
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
            <form action="" noValidate className="needs-validation w-full flex flex-col gap-3">
               <div className="emaillabelinput flex flex-col ">
                 <label htmlFor="" className="form-label">
                    Full Name
                </label>
                <input type="text" className="form-control" placeholder="Enter Full Name" />
               </div>

              <div className="passwordinputlabel flex flex-col ">
                  <label htmlFor="" className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>



                 <div className="emaillabelinput flex flex-col ">
                 <label htmlFor="" className="form-label">
                    Password
                </label>
                <input type="password" className="form-control" placeholder="Enter Password" />
               </div>


                <div className="emaillabelinput flex flex-col ">
                 <label htmlFor="" className="form-label">
                  Skills
                </label>
                <textarea type="text" className="form-control" placeholder="Skills..." />
               </div>

                <div className="emaillabelinput flex flex-col ">
                 <label htmlFor="" className="form-label">
                  Work Experience
                </label>
                <textarea type="text" rows={5} className="form-control" placeholder="Work Experience..." />
               </div>


 <div className="emaillabelinput flex flex-col ">
                 <label htmlFor="" className="form-label">
                  Education
                </label>
                <textarea type="text" rows={5} className="form-control" placeholder="Education..." />
               </div>
                <button className="btn btn-dark">Create Account</button>
            </form>

           
             <div className="donthaveacc  flex flex-col text-center ">
              Already have an account? Sign In
            </div>
           
        </div>
    </div>
}
export default CandidateRegistration;