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
import Profile from "../src/pages/recruiter/profile/Profile.jsx"
import Admindashboard from "../src/pages/admin/dashboard/Admindashboard.jsx"
import ManageUsers from "../src/pages/admin/manageusers/ManageUsers.jsx"
import Managejobs from "../src/pages/admin/managejobs/Managejobs.jsx"
import ProtectedRoutes from "./ProtectedRoute.jsx"
import JobDetails from "../src/pages/candidate/Jobdetail/JobDetails.jsx"

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"
import Editjobs from "../src/pages/recruiter/myjobs/components/Editjobs.jsx"
const AppRoutes=()=>{
    
    const {user,loading}=useContext(AuthContext);
    return <Routes>
        <Route path="/" element={
             loading ? <div>Loading...</div> : 
    user ? <Navigate to={`/${user.role}/dashboard`} /> : 
    <LandingPage></LandingPage> 
           
            }/>
        <Route path="/login" element={
             loading ? <div>Loading...</div> : 
    user ? <Navigate to={`/${user.role}/dashboard`} /> : 
    <Login />   
           }/>
        <Route path="/recruiter/register" element={
                         loading ? <div>Loading...</div> : 
    user ? <Navigate to={`/${user.role}/dashboard`} />
   :<RecruiterRegistration></RecruiterRegistration>}/>
        <Route path="/candidate/register"  element={
                         loading ? <div>Loading...</div> : 
    user ? <Navigate to={`/${user.role}/dashboard`} />:<CandidateRegistration/>}/>
        <Route path="/choose-role"  element={<RoleChoose/>} />

        
        <Route path="/candidate/dashboard" element={
            <ProtectedRoutes role={"candidate"}>
                <UserDashboard />
            </ProtectedRoutes>
            }/>
        <Route path="/candidate/browsejobs" element={
            <ProtectedRoutes role={"candidate"}>
                <JobBrowse/>
            </ProtectedRoutes>
            }/>
        <Route path="/candidate/myapllications" element={
            <ProtectedRoutes role={"candidate"}>
                <MyApplications/>
            </ProtectedRoutes>
            } />
        <Route path="/candidate/saved-jobs" element={
            <ProtectedRoutes role={"candidate"}>
                <SavedJobs/>
            </ProtectedRoutes>
            }/>
            
        <Route path="/candidate/userprofile" element={
            <ProtectedRoutes role={"candidate"}>
                <UserProfile/>
            </ProtectedRoutes>
            }/>

            <Route path="/candidate/jobdetail/:jobid" element={
              <ProtectedRoutes role={"candidate"}>
                <JobDetails/>
              </ProtectedRoutes>
            }/>


{/* recurite routes */}
        <Route path="/recruiter/dashboard" element={
            <ProtectedRoutes role={"recruiter"}>
            <RecruiterDashboard/>
                </ProtectedRoutes>
            } />
        <Route path="/postjob" element={
            <ProtectedRoutes role={"recruiter"}>
                <PostJob/>
            </ProtectedRoutes>
            }/>
        <Route path="/jobsposted" element={
            <ProtectedRoutes role={"recruiter"}>
                <MyJobs/>
            </ProtectedRoutes>
            }/>
        <Route path="/applicants" element={
            <ProtectedRoutes role={"recruiter"}>
                <Applicants/>
            </ProtectedRoutes>
            } />
        <Route path="/recruiter-profile" element={
            <ProtectedRoutes role={"recruiter"}>
                <Profile/>
            </ProtectedRoutes>
            }/>
             <Route path="/recruiter-editjob/:jobid" element={
            <ProtectedRoutes role={"recruiter"}>
                <Editjobs/>
            </ProtectedRoutes>
            }/>




        <Route path="/admin/dashboard" element={<Admindashboard/>} />
        <Route path="/manageusers" element={<ManageUsers/>}/>
        <Route path="/managejobs" element={<Managejobs/>} />
        <Route path="*" element={<div className="pt-30">Page Not Found lorem*30</div>} />
    </Routes>
}
export default AppRoutes;