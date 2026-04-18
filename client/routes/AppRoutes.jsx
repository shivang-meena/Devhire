import {Routes,Route} from "react-router-dom"
import LandingPage  from "../src/pages/public/landingpage/Landing.jsx"
import Login from "../src/pages/login_register_pages/Login.jsx"
import RecruiterRegistration from "../src/pages/login_register_pages/RecruterRegistration.jsx"
import CandidateRegistration from "../src/pages/login_register_pages/CandidateRegistration.jsx"
import RoleChoose from "../src/pages/login_register_pages/RoleChoose.jsx"
import UserDashboard from  "../src/pages/candidate/candidateDashboard/UserDashboard.jsx"
import JobBrowse from "../src/pages/candidate/Browsejob/JobBrowse.jsx"
import MyApplications from "../src/pages/candidate/myapplications/MyApplications.jsx"
import SavedJobs from "../src/pages/candidate/savedjobs/SavedJobs.jsx"
import UserProfile from "../src/pages/candidate/profile/UserProfile.jsx"
import RecruiterDashboard from "../src/pages/recruiter/dashboard/RecruiterDashboard.jsx"
import PostJob from "../src/pages/recruiter/postjob/PostJob.jsx"
import MyJobs from "../src/pages/recruiter/myjobs/MyJobs.jsx"
import Applicants from "../src/pages/recruiter/applicants/Applicants.jsx"
const AppRoutes=()=>{
    return <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/recruiter/register" element={<RecruiterRegistration></RecruiterRegistration>}/>
        <Route path="/candidate/register"  element={<CandidateRegistration/>}/>
        <Route path="/choose-role"  element={<RoleChoose/>} />
        <Route path="/user-dashboard" element={<UserDashboard />}/>
        <Route path="/user-browsejobs" element={<JobBrowse/>}/>
        <Route path="/myapllications" element={<MyApplications/>} />
        <Route path="/saved-jobs" element={<SavedJobs/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/recruiterdashboard" element={<RecruiterDashboard/>} />
        <Route path="/postjob" element={<PostJob/>}/>
        <Route path="/jobsposted" element={<MyJobs/>}/>
        <Route path="/applicants" element={<Applicants/>} />
        <Route path="*" element={<div className="pt-30">Page Not Found lorem*30</div>} />
    </Routes>
}
export default AppRoutes;