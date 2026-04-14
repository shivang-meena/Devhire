import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const JobDetails = () => {
    // { companyname, role, location, salary, skills, posttime, jobtype, experience }
    return <>
      <div className="flex  items-center gap-3  h-20 p-4 text-md shadow-sm" ><FaArrowLeft/> <div className="text-md"> Back to Browse Jobs</div></div>
    <div className="parent-div flex-center">

        <div className="px-3 max-w-3xl">


        <div className="shadow-md flex flex-col gap-3 border rounded-md p-3 mt-5">
            <div className="flex flex-col gap-1 ">
                <div className="text-3xl font-bold">Senior React Developer</div>
                <div className="text-xl font-bold">Tech Innovators Inc</div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap max-w-xl gap-3 justify-between">
                    <div className="flex items-center gap-2 text-[18px]"><MdLocationPin />San Francisco, CA</div>
                    <div className="flex items-center gap-2 text-[18px]"><BiDollar />$150,000 - $180,000</div>
                    <div className="flex items-center gap-2 text-[18px]"><FaShoppingBag />Full-time</div>
                </div>
                <div className="border rounded-md h-10 flex items-center justify-center bg-[#0A345A]  text-white sm:max-w-[150px]">
                    <button>Apply now </button>
                </div>
            </div>
        </div>

        <div className="shadow-md flex flex-col gap-2 border rounded-md p-3 mt-5" >
            <div className="text-2xl font-bold">About This Job</div>
            <div>We are looking for an experienced Senior React Developer to join our growing team. You will be responsible for building and maintaining our customer-facing applications using React and modern web technologies.

                You will work closely with our design and backend teams to create seamless user experiences. This is an excellent opportunity to work on challenging projects and grow your career with a fast-growing tech company.

                Responsibilities:

                • Design and implement scalable React components

                • Collaborate with product and design teams

                • Optimize application performance

                • Mentor junior developers

                • Write clean, maintainable code

                Requirements:

                • 5+ years of professional React development experience

                • Strong understanding of JavaScript ES6+

                • Experience with state management (Redux, Zustand)

                • Knowledge of REST APIs and GraphQL

                • Git proficiency
            </div>
        </div>

        <div className="shadow-md flex flex-col gap-2 border rounded-md p-3 mt-5 mb-4">
            <div>Required Skills</div>
            <div className="flex flex-wrap gap-2">
              <div className="border border-[#d3d4d4] rounded-xl font-semibold  flex-center max-w-30 max-h-10 px-3 py-2 text-md">Typescript</div>

                <div className="border border-[#d3d4d4] rounded-xl font-semibold  flex-center max-w-30 max-h-10 px-3 py-2 text-md">java</div>
                <div className="border border-[#d3d4d4] rounded-xl font-semibold  flex-center max-w-30 max-h-10 px-3 py-2 text-md">java script</div>
                <div className="border border-[#d3d4d4] rounded-xl font-semibold  flex-center max-w-30 max-h-10 px-3 py-2 text-md">Typescript</div>
            </div>
        </div>
    </div>
    </div>
    </>
}

export default JobDetails;