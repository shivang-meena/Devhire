import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
const FeaturedJob = () => {
    return <div className="  flex flex-col w-full bg-white gap-5 py-20 ">

        <div className="heading-text flex-center flex-col ">
            <div className="heading-featurejob text-2xl font-bold px-5 ">
                Featured Jobs
            </div>
            <div className="text-featuredjob px-5 pr-10 text-md text-[#5B646F] ">
                Top opportunities from leading tech companies
            </div>
        </div>
         <div className="outer-view-jobsbtn w-full flex-center">
            <div className="buttion-viewjobs flex-center gap-3 border text-[#414141] border-[#E2E5E8] px-4 font-medium rounded-lg p-2  w-50">
            View All Jobs <FaArrowRightLong />
        </div>
         </div>


        {/* <div className="jobs flex flex-col gap-10 w-full p-4 md:flex-row md:flex-wrap md:justify-self-start"> */}
        <div className="jobs grid gap-5  px-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]  md:px-10 ">
     


            <div className="jobcard flex  flex-col p-6  border-2 border-[#E2E5E8]  rounded-lg gap-8 max-w-170 md:max-w-100">

                <div className="type-button flex justify-between">
                    <div className="T-button border border-[#E2E5E8]  h-12 w-12 flex-center rounded-sm bg-[#E2E5E8] text-xl ">
                        T
                    </div>
                    <div className="type-job border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#E2E5E8]">
                        full-time
                    </div>
                </div>

                <div className="jobrole-company-name flex flex-col gap-1">
                    <div className="job-namerole flex font-semibold text-xl">
                        Senior Frontend Devloper
                    </div>
                    <div className="company-name">TechFlow Inc.</div>
                </div>


                <div className="skill-plussalary flex flex-col gap-1">
                    <div className="location-salary flex  justify-between text-[#797b7c]  ">
                        <div className="location flex-center gap-2">
                            <MdLocationPin /> San Frachisco,CA
                        </div>
                        <div className="salary flex-center ">
                            <BiDollar />144k - <BiDollar />180k
                        </div>
                    </div>


                    <div className="skills flex gap-5">
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs">Typescript</div>
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >React</div>
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >Next.js</div>
                    </div>
                </div>

                <div className="time-posted-applybutton flex justify-between">
                    <div className="time-posted text-[#797b7c]">
                        2 days ago
                    </div>
                    <div className="applynowbtn">
                        Apply Now
                    </div>
                </div>
            </div>

             <div className="jobcard flex flex-col p-6  border-2 border-[#E2E5E8]   rounded-lg gap-8 max-w-170 md:max-w-100">

                <div className="type-button flex justify-between">
                    <div className="T-button border border-[#E2E5E8]  h-12 w-12 flex-center rounded-sm bg-[#E2E5E8] text-xl">
                        T
                    </div>
                    <div className="type-job border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#E2E5E8]">
                        full-time
                    </div>
                </div>

                <div className="jobrole-company-name flex flex-col gap-1">
                    <div className="job-namerole flex font-semibold text-xl">
                        Senior Frontend Devloper
                    </div>
                    <div className="company-name">TechFlow Inc.</div>
                </div>


                <div className="skill-plussalary flex flex-col gap-1">
                    <div className="location-salary flex gap-7 text-[#797b7c]  ">
                        <div className="location flex-center gap-2">
                            <MdLocationPin /> San Frachisco,CA
                        </div>
                        <div className="salary flex-center ">
                            <BiDollar />144k - <BiDollar />180k
                        </div>
                    </div>


                    <div className="skills flex gap-5">
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs">Typescript</div>
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >React</div>
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >Next.js</div>
                    </div>
                </div>

                <div className="time-posted-applybutton flex justify-between">
                    <div className="time-posted text-[#797b7c]">
                        2 days ago
                    </div>
                    <div className="applynowbtn">
                        Apply Now
                    </div>
                </div>
            </div>
             

              <div className="jobcard flex flex-col p-6  border-2 border-[#E2E5E8]  rounded-lg gap-8 max-w-170 md:max-w-100">

                <div className="type-button flex justify-between">
                    <div className="T-button border border-[#E2E5E8]  h-12 w-12 flex-center rounded-sm bg-[#E2E5E8] text-xl">
                        T
                    </div>
                    <div className="type-job border border-[#E2E5E8]  h-5 w-20 flex-center rounded-sm bg-[#E2E5E8]">
                        full-time
                    </div>
                </div>

                <div className="jobrole-company-name flex flex-col gap-1">
                    <div className="job-namerole flex font-semibold text-xl">
                        Senior Frontend Devloper
                    </div>
                    <div className="company-name">TechFlow Inc.</div>
                </div>


                <div className="skill-plussalary flex flex-col gap-1">
                    <div className="location-salary flex gap-7 text-[#797b7c]  ">
                        <div className="location flex-center gap-2">
                            <MdLocationPin /> San Frachisco,CA
                        </div>
                        <div className="salary flex-center ">
                            <BiDollar />144k - <BiDollar />180k
                        </div>
                    </div>


                    <div className="skills flex gap-5">
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs">Typescript</div>
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >React</div>
                        <div className="border border-[#d3d4d4] rounded-md flex-center p-1 text-xs" >Next.js</div>
                    </div>
                </div>

                <div className="time-posted-applybutton flex justify-between">
                    <div className="time-posted text-[#797b7c]">
                        2 days ago
                    </div>
                    <div className="applynowbtn">
                        Apply Now
                    </div>
                </div>
            </div>

        </div>

    </div>
}

export default FeaturedJob;