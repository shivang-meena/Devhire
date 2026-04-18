import { AuthProvider } from "../context/AuthContext.jsx"
import LandingPage from "./pages/public/landingpage/Landing.jsx"
import Navbar from "./components/Navbar.jsx"
import Fotter from "./components/Fotter.jsx"
import AppRoutes from "../routes/AppRoutes.jsx"
import { useState } from "react"
import JobDetails from "./pages/candidate/Jobdetail/JobDetails.jsx"
function App() {
   
  return (<> 



    <AuthProvider>
      <Navbar></Navbar>
 <main>
 <AppRoutes></AppRoutes>
 </main>
    <Fotter className="z-50" ></Fotter>
       </AuthProvider>


{/* this is for tempshow job detil  */}

{/* <JobDetails></JobDetails> */}
       </>
  )
}

export default App
