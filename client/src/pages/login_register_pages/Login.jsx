import { useState } from "react";
const Login = () => {
 
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");
    let [errormsg,seterrmsg]=useState("");
async function handlesubmit(event){
      event.preventDefault()
     try{
             const res=await fetch("http://localhost:5000/user/login",{
        method: "POST",
    headers: { "Content-Type": "application/json" },
        body:JSON.stringify({email,password})
      });
      const token=await res.json();
      if(!res.ok){
       seterrmsg(token.message||"any thigin was failed ");
       return;
      }

      console.log(token);
     }catch{
       seterrmsg("check your network connection");
     }
}

    return <div className="loginpage min-h-screen w-full flex-center px-2">

        <div className="loginform flex-center flex-col w-120 h-120 border border-[#E2E5E8] px-10 gap-8 rounded-lg shadow-lg ">
            <div className="welcomeback-text flex flex-col text-center  gap-2 ">
                <div className="welcomeback text-center text-3xl font-bold">
                    Welcome Back
                </div>
                <div className="second-text text-center text-[#5B646F] text-lg">
                    Sign in to your DevHire account
                </div>

            </div>
            {errormsg&&<div className="text-red-400"> {errormsg}</div>}
            <form action="" onSubmit={handlesubmit} noValidate className="needs-validation w-full flex flex-col gap-3">
               <div className="emaillabelinput flex flex-col ">
                 <label htmlFor="" className="form-label">
                    Enter Your Email
                </label>
                <input onChange={(event)=>{setemail(event.target.value);  seterrmsg("");}} type="email" className="form-control" placeholder="Enter Email ..." />
               </div>

              <div className="passwordinputlabel flex flex-col ">
                  <label htmlFor="" className="form-label">Enter Password</label>
                <input onChange={(event)=>{setpassword(event.target.value);  seterrmsg("");}} type="password" className="form-control" placeholder="Enter Password" />
              </div>
                <button className="btn btn-dark">Login</button>
            </form>

           <div className="signup-forgotpass flex flex-col text-center gap-3">
             <div className="donthaveacc">
                Don't have an account? Sign up
            </div>
            <div className="forgot-password">
                Forgot password?
            </div>
           </div>
        </div>
    </div>
}
export default Login;