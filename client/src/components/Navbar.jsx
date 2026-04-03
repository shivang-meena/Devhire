import { useState } from 'react';
import logo from '../assets/f700fabe-7937-4a0b-a1fa-1480778bbe02.jpg';
import { X, Menu } from "lucide-react"//this is lucide react librrary icon cross and threelines icon for ham nav 

const PublicNavbar = ({user}) => {
    let [mobilenav, setmobilenav] = useState(false);
    return <>
        <div className="flex w-full bg-white h-16 text-black justify-center items-center">
            <div className="inner-div flex  w-full justify-between">
                <div className="web-logo-text flex justify-center items-center pl-8 gap-2 text-xl font-bold">
                    <div className="web-logo bg-black w-10 h-10 rounded-lg  flex-center ">
                        <img src={logo} className="w-7 h-7 rounded-md " alt="" />
                    </div>
                    <div className="web-text">
                        DevHire
                    </div>
                </div>


                {/* desktop navigation */}
                <div className=" hidden login-signup  md:flex-center md:flex pr-8 gap-6 ">
                    <div className="login flex-center">
                        Home
                    </div>
                    <div className="login flex-center">
                        About us
                    </div>
                  

                 

            {user?(<div className="userprofile-name bg-gray-50 flex-center border border-gray-400 rounded-xl w-auto px-4 h-10 gap-2">
                    <div className="profilepic flex-center">
                        <img src={logo} className="h-6 w-6 border border-gray-200 rounded-xl" alt="" />
                    </div>
                    <div className="profile-name flex-center">
                            {user}
                    </div>
                 </div>):(<div className="flex-center gap-5 border border-gray-300 p-1 rounded-md w-43">
                        <div className="login flex-center">
                            Log in
                        </div>
                        <div className="signup bg-black w-23 h-9 font-semibold text-white rounded-lg flex-center">
                            Register
                        </div>

                    </div>)}
                    


                </div>


                {/* //mobile navigation  */}
                <div className=" flex  md:hidden pr-8 justify-center align-center ">
                    <button className="flex-center" onClick={() => setmobilenav(!mobilenav)}>
                        {mobilenav ? (<X className="h-5 w-5" />) : (<Menu className="h-5 w-5" />)}
                    </button>
                </div>

                {/* //this is hambruger options  */}



            </div>


        </div>
        {mobilenav && (<div className=" bg-white border border-gray-500    px-4 py-4  md:hidden">
             <div className="w-full flex-center my-4 py-2 rounded-md border border-gray-500">
                        Home
                    </div>
                    <div className="w-full flex-center my-4 py-2 rounded-md border border-gray-500">
                        About us
                    </div>
            {!user&&(<div>
                <div className=" w-full flex-center my-4 py-2 rounded-md border border-gray-500">Login</div>
            <div className="my-4 py-3 rounded-md w-full border flex-center  bg-black  font-semibold text-white rounded-lg flex" >Register</div>
            </div>)}

        {user&&(<div>
                <div className=" w-full flex-center my-4 py-2 rounded-md border border-gray-500">Profile</div>

        </div>)}

        </div>)}


    </>
}

export default PublicNavbar;