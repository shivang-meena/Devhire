import {Routes,Route} from "react-router-dom"
import LandingPage  from "../src/pages/public/landingpage/Landing.jsx"
import Login from "../src/pages/login_register_pages/Login.jsx"


const AppRoutes=()=>{
    return <Routes>

        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
}
export default AppRoutes;