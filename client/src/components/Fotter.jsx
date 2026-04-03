import logo from '../assets/f700fabe-7937-4a0b-a1fa-1480778bbe02.jpg';

const Fotter = () => {
    return <div className="outer-div-fotter px-10  pt-15">
        <div className="upper-fotter grid gap-8 sm:grid-cols-2 pb-10 lg:grid-cols-5 text-md ">
            <div className="flex flex-col gap-5">
                <div className="web-logo-text flex  items-center gap-2 text-xl font-bold">
                    <div className="web-logo bg-black w-10 h-10 rounded-lg  flex-center ">
                        <img src={logo} className="w-7 h-7 rounded-md " alt="" />
                    </div>
                    <div className="web-text">
                        DevHire
                    </div>
                </div>
                <div className="text-first-fotter-div max-w-xs text-[#5B646F] ">
                    Connecting talented developers with innovative companies. Your next opportunity starts here.
                </div>
            </div>


            <div className="flex flex-col gap-3 ">
                 <div className="font-bold ">For Candidates</div>
                 <div className="text-[#5B646F]">Browse Jobs</div>
                 <div className="text-[#5B646F]">Companies</div>
                 <div className="text-[#5B646F]"> Career Resources</div>
                 <div className="text-[#5B646F]">  Salary Guide</div>
            </div>

            <div className="flex flex-col gap-3 ">
                <div className="font-bold ">For Recruiters</div>
                <div className="text-[#5B646F]">Post a Job</div>
                <div className="text-[#5B646F]">Pricing</div>
                <div className="text-[#5B646F]">Recruiting Solutions</div>
                <div className="text-[#5B646F]">Success Stories</div>
            </div>

            <div className="flex flex-col gap-3 ">
                <div className="font-bold ">Company</div>
                <div className="text-[#5B646F]">About Us</div>
                <div className="text-[#5B646F]">Blog</div>
                <div className="text-[#5B646F]">Contact</div>
                <div className="text-[#5B646F]">Careers</div>
            </div>

            <div className="flex flex-col gap-3 ">
                <div className="font-bold ">Legal</div>
                <div className="text-[#5B646F]">Privacy Policy</div>
                <div className="text-[#5B646F]">Terms of Service</div>
                <div className="text-[#5B646F]">Cookie Policy</div>
            </div>

        </div>
        
       <hr/>

        <div className="last-rights w-full h-20 flex-center ">
            © 2026 DevHire. All rights reserved.
        </div>
    </div>
}

export default Fotter;