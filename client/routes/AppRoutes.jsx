import {Routes,Route} from "react-router-dom"
import LandingPage  from "../src/pages/public/landingpage/Landing.jsx"
import Login from "../src/pages/login_register_pages/Login.jsx"
import RecruiterRegistration from "../src/pages/login_register_pages/RecruterRegistration.jsx"
import CandidateRegistration from "../src/pages/login_register_pages/CandidateRegistration.jsx"
import RoleChoose from "../src/pages/login_register_pages/RoleChoose.jsx"

const AppRoutes=()=>{
    return <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/recruiter/register" element={<RecruiterRegistration></RecruiterRegistration>}/>
        <Route path="/candidate/register"  element={<CandidateRegistration/>}/>
        <Route path="/choose-role"  element={<RoleChoose/>} />
        <Route path="*" element={<div className="">Page Not Found lorem*30</div>} />
    </Routes>
}
export default AppRoutes;