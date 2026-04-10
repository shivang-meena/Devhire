import { IoPersonAdd } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiRocketLaunchLight } from "react-icons/pi";
const Howitwork = () => {
    return <section className=" flex flex-col flex-center px-5 gap-10 py-20">
        
        <div className="how-itwork-text flex-center gap-4 flex-col ">
            <div className="howitworktext text-2xl font-bold">
            How It Works
        </div>

        <div className="getstarted-text text-xl text-center text-[#5B646F]">
            Get started in minutes and find your next opportunity
        </div>

        </div>

        {/* <div className="upper-divhowitworksteps grid  [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-10 w-full"> */}
        <div className="upper-divhowitworksteps flex flex-col justify-center sm:flex-row gap-5 w-full">


            <div className="person-add  flex-center flex-col gap-4">
                <div className="zeroone-howwork relative top-9 left-6 h-7 flex-center w-7 border bg-[#0E5794] rounded-2xl text-white text-xs font-bold border-none ">
                        01
                    </div>
                     
                <div className="personadd-icon h-17 w-17 flex-center text-3xl bg-[#0A345A] text-white border-none rounded-4xl">
                   
                    <IoPersonAdd />
                </div>
               
                <div className="createur-profile  text-xl font-semibold text-center">
                    Create Your Profile
                </div>
                <div className="create-profile-text text-[#5B646F] text-center">
                    Sign up and build your professional profile. Highlight your skills, experience, and what you're looking for in your next role.
                </div>
            </div>
             

            <div className="opportunities flex-center gap-4 flex-col">
                <div className="zeroone-howwork relative top-9 left-6 h-7 flex-center w-7 border bg-[#0E5794] rounded-2xl text-white text-xs font-bold border-none ">
                        02
                    </div>
                <div className="opportunities-find-logog h-17 w-17 flex-center text-3xl bg-[#0A345A] text-white border-none rounded-4xl ">
                    <CiSearch></CiSearch>
                </div>
                <div className="discover-opportuniteis-text text-center text-xl font-semibold">
                    Discover Opportunities
                </div>
                <div className="opportunity-text text-[#5B646F] text-center">
                    Browse through hundreds of curated developer jobs. Filter by location, salary, tech stack, and more to find your perfect match.
                </div>
            </div>


            <div className="dream-job flex-center gap-4 flex-col">
                <div className="zeroone-howwork relative top-9 left-6 h-7 flex-center w-7 border bg-[#0E5794] rounded-2xl text-white text-xs font-bold border-none ">
                        03
                    </div>
                <div className="dream-job-logo h-17 w-17 flex-center text-3xl bg-[#0A345A] text-white border-none rounded-4xl ">
                    <PiRocketLaunchLight />
                </div>
                <div className="dreamjob-heading text-xl font-semibold text-center ">
                    Land Your Dream Job
                </div>
                <div className="dream-job-text text-[#5B646F] text-center">
                    Apply with one click, track your applications, and connect directly with recruiters. Your next career opportunity awaits.
                </div>
            </div>

        </div>
    </section>
}

export default Howitwork;