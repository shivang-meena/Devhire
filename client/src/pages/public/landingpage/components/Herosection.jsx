import { PiMagnifyingGlassThin } from "react-icons/pi";
const Herosection=()=>{
    return <>
       <div className="hero-section w-screen h-[90vh] flex-center flex-col gap-7">
            <div className="heading-herosection-text flex-center flex-col gap-7 ">
                  <div className="heading flex-center text-center font-bold text-6xl">
                   Find Your Dream Dev Job
                  </div>
                  <div className="text-hero text-xl max-w-3xl flex-center text-center text-[#5B646F]">
                     Connect with top tech companies and discover opportunities that match your skills. Your next career move starts here.
                  </div>
            </div>
            <div className="search-bar flex justify-center align-center flex-col gap-3 md:flex-row ">
                  <div className="search-input flex-center">
                   <div className="h-12 w-10 flex-center rounded-md rounded-r-none border border-gray-400 border-r-0 font-normal  ">
                     <PiMagnifyingGlassThin className="h-10 w-5 font-extralight  " />
                   </div>
                 <input type="text" className="h-12 min-w-80 max-w-120 rounded-md rounded-l-none border border-gray-500 border-l-0 outline-none" placeholder="Job title, skills, or company..."/>
                  </div>
                  <div className="search-button bg-[#0A345A] flex-center text-white h-11 w-30 rounded-md ">
                    <button className="">
                        Search Job
                    </button>
                  </div>
            </div>
       </div>
    </>
}
export default Herosection;