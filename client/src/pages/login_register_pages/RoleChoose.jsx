import { GoPerson } from "react-icons/go";
const RoleChoose = () => {
    return <>
        <div className="pt-20 flex flex-col justify-center items-center pb-5">
            <div className="chooserole-text flex-center flex-col gap-4 py-4 ">
                <div className="choserole text-4xl font-bold">
                    Choose Your role
                </div>
                <div className="text-secod text-center text-lg">
                    Select whether you're looking for a job or hiring talent
                </div>
            </div>

            <div className="choserole flex w-full flex-col px-3 gap-5 md:flex-row md:items-center md:justify-center pb-5">

                <div className="candidate flex flex-col items-center  px-3 py-4 gap-3 border shadow-md border-2 rounded-xl md:max-w-[450px]">
                    <div className="flex-center h-15 w-15 bg-blue-300 rounded-4xl text-2xl">
                        <GoPerson />
                    </div>
                    <div className="flex-center flex-col ">
                        <div className="text-2xl font-bold">I'm a Candidate</div>
                        <div className="text-md">Looking for your next job opportunity</div>
                    </div>
                    <div className="text-sm">Join thousands of developers and tech professionals finding their dream jobs. Upload your resume, showcase your skills, and connect with top companies.</div>
                    <div className="flex flex-col justify-start items-start w-full">
                        <div>✓
                            Browse thousands of job listings</div>
                        <div>✓
                            Showcase your skills & experience</div>
                        <div>✓
                            Track your applications</div>
                    </div>
                    <div className=" border rounded-md px-5 py-2 bg-[#0A345A] text-white">  <a href="http://localhost:5173/candidate/register" className="!no-underline text-white"> <button className="">Continue as Candidate</button> </a> </div>
                </div>



                <div className="recruiter  flex flex-col items-center  px-3 py-4 gap-3 border shadow-md border-2 rounded-xl md:max-w-[450px]">

                    <div className="flex-center h-15 w-15 bg-blue-300 rounded-4xl text-2xl">
                        <GoPerson />
                    </div>
                    <div className="flex-center flex-col ">
                        <div className="text-2xl font-bold">I'm a Candidate</div>
                        <div className="text-md">Looking for your next job opportunity</div>
                    </div>
                    <div className="text-sm">Join thousands of developers and tech professionals finding their dream jobs. Upload your resume, showcase your skills, and connect with top companies.</div>
                    <div className="flex flex-col justify-start items-start w-full">
                        <div>✓
                            Browse thousands of job listings</div>
                        <div>✓
                            Showcase your skills & experience</div>
                        <div>✓
                            Track your applications</div>
                    </div>
                    <div className=" border rounded-md px-5 py-2 bg-[#0A345A] text-white"> <a href="http://localhost:5173/recruiter/register" className="!no-underline text-white"><button className="">Continue as Candidate</button></a></div>

                     
                </div>

            </div>

            <div className="already w-full flex-center">
                Already have an account? Sign in here
            </div>
        </div>
    </>
}

export default RoleChoose;