import { AuthProvider } from "../context/AuthContext.jsx"
import LandingPage from "./pages/public/landingpage/Landing.jsx"
import Navbar from "./components/Navbar.jsx"
import Fotter from "./components/Fotter.jsx"
import AppRoutes from "../routes/AppRoutes.jsx"
import { useState } from "react"
import JobDetails from "./pages/candidate/Jobdetail/JobDetails.jsx"
import { JobProvider } from "../context/JobContext.jsx"
import { ApplicationProvider } from "../context/ApplicationContext.jsx"
function App() {
   
  return (<> 



    <AuthProvider>
      <JobProvider>
        <ApplicationProvider>
      <Navbar></Navbar>
 <main>
 <AppRoutes></AppRoutes>
 </main>
    <Fotter className="z-50" ></Fotter>
    </ApplicationProvider>
    </JobProvider>
       </AuthProvider>


{/* this is for tempshow job detil  */}

{/* <JobDetails></JobDetails> */}
       </>
  )
}

export default App
