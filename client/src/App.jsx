import { AuthProvider } from "../context/AuthContext.jsx"
import LandingPage from "./pages/public/landingpage/Landing.jsx"
import Navbar from "./components/Navbar.jsx"
import Fotter from "./components/Fotter.jsx"
import AppRoutes from "../routes/AppRoutes.jsx"
function App() {
  return (
    <> 
    <AuthProvider>
      <Navbar></Navbar>
 {/* <LandingPage></LandingPage> */}
 <main>
 <AppRoutes></AppRoutes>

 </main>
    <Fotter></Fotter>
       </AuthProvider>
       </>
  )
}

export default App
