import { useContext, useEffect, useState } from "react";
import Applicationcard from "./components/Applicantscard.jsx";
import Sidebar from "../dashboard/component/Sidebar";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext.jsx";
import { JobContext } from "../../../../context/JobContext.jsx";


const Applicants = () => {
 const navigate=useNavigate();
  let [marginleft, setmarginleft] = useState(false);
  function sidebarspacefunc(spacesidebar) {
    setmarginleft(spacesidebar);
  }

const [refreshstatus,setrefreshstatus]=useState(false);
  const location = useLocation();

  const { token } = useContext(AuthContext);

  const { recruiterjobs } = useContext(JobContext);
  const singleJob = recruiterjobs?.find(
    (job) => job._id === location.state
  );


  let [applicantsvar, setapplicantsvar] = useState();

  let [Applicationsdata, setapplicationsdata] = useState([]);
  let [initialdata, setinitialdata] = useState([]);
  async function applicants() {
    try {
      const res = await fetch(`http://localhost:5000/applications/job/${location.state}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });


      const data = await res.json();
      console.log(data);
      setapplicantsvar(data.messege.length);
      setapplicationsdata(data.messege);
      setinitialdata(data.messege);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    applicants();
  }, [refreshstatus]);

  let [clicked, setclicked] = useState("All");
  function filterapplications(type) {
     if (!Array.isArray(initialdata)) return;
    if (type === "All") {
      setapplicationsdata(initialdata);
    } else {
      const filtered = initialdata.filter((app) => app.status === type);
      setapplicationsdata(filtered);
    }
  }
  return (<><div className={`maincontent overflow-x-hidden  mt-20 h-screen ${marginleft ? "md:ml-68" : "ml-20"}`}>
    <Sidebar sidebarspacefunc={sidebarspacefunc} colortext={"My Applications"} />
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center" onClick={()=>{navigate(-1)}}><FaChevronLeft /> Back</div>
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-bold">{singleJob.title}</div>
        <div className="text-lg">Total Applicants: {applicantsvar}</div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div onClick={() => { filterapplications("All"); setclicked("All") }} className={` ${clicked === "All" && "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm `}>
            All ({applicantsvar})
          </div>
          <div onClick={() => { filterapplications("Applied"); setclicked("Applied") }} className={` ${clicked === "Applied" && "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
            Applied
          </div>
          <div onClick={() => { filterapplications("Reviewed"); setclicked("Reviewed") }} className={` ${clicked === "Reviewed" && "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
            Reviewed
          </div>
          <div onClick={() => { filterapplications("Interview"); setclicked("Interview") }} className={` ${clicked === "Interview" && "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
            Interview
          </div>
          <div onClick={() => { filterapplications("Selected"); setclicked("Selected") }} className={` ${clicked === "Selected" && "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
            Selected
          </div>
          <div onClick={() => { filterapplications("Rejected"); setclicked("Rejected") }} className={` ${clicked === "Rejected" && "bg-[#0A345A] text-white"} px-3 h-9 rounded-md border-1 border-[#E2E5E8] text-sm flex-center bg-[] shadow-sm`}>
            Rejected
          </div>

        </div>

        <div className="flex flex-col  h-[60vh] overflow-y-auto overflow-x-hidden  md:h-[70vh] md:w-[76vw] md:w-full md:pr-10 ">
          {/* {(!Applicationsdata)?Applicationsdata.map((application)=>{
                        return <Applicationcard application={application} />
                      }):<div>Threr is no applications</div>} */}
          {
            Applicationsdata && Applicationsdata.length > 0 ? (
              Applicationsdata.map((application) => {
                return (
                  <Applicationcard refreshstatus={refreshstatus} setrefreshstatus={setrefreshstatus}  refreshstatus={refreshstatus} applicationdetails={application} />
                );
              })
            ) : (
              <div>There is no applications</div>
            )
          }
        </div>
      </div>
    </div>
  </div></>)
}

export default Applicants;