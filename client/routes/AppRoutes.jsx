import {Routes,Route} from "react-router-dom"
import LandingPage  from "../src/pages/public/landingpage/Landing.jsx"
import Login from "../src/pages/login_register_pages/Login.jsx"
import RecruiterRegistration from "../src/pages/login_register_pages/RecruterRegistration.jsx"
import CandidateRegistration from "../src/pages/login_register_pages/CandidateRegistration.jsx"
import RoleChoose from "../src/pages/login_register_pages/RoleChoose.jsx"
import UserDashboard from "../src/pages/candidateDashboard/UserDashboard.jsx"

const AppRoutes=({sidebarspacecomechild})=>{
    return <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/recruiter/register" element={<RecruiterRegistration></RecruiterRegistration>}/>
        <Route path="/candidate/register"  element={<CandidateRegistration/>}/>
        <Route path="/choose-role"  element={<RoleChoose/>} />
        <Route path="/user-dashboard" element={<UserDashboard />}/>
        <Route path="*" element={<div className="pt-30">Page Not Found lorem*30</div>} />
    </Routes>
}
export default AppRoutes;