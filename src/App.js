import Student from "./Pages/Student";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Admin from "./Pages/Admin";
import Lecturer from "./Pages/Lecturer";
import Home from "./Pages/Home";
import Write from "./Components/Student/Write";
import Login_Admin from "./Pages/Login/Admin";
import Login_Lecturer from "./Pages/Login/Lecturer";
import Login_Student from "./Pages/Login/Student";
import { DarkModeContextProvider } from "./Contexts/DarkModeContext";
import List from "./Components/Lecturer/List";
import AttendancePage from "./Components/Student/AttendancePage";
import StudentsTable from "./Components/Admin/StudentsTable";
import LeaveRequest from "./Components/Admin/LeaveRequest";
import List2 from "./Components/Lecturer/List2";

function App() {
  return (
    <>
    <Router>

    <Routes>

    <Route path="/Student/:mail" element={<Home/>}/>

    <Route path="/" element={<DarkModeContextProvider> <Student/>  </DarkModeContextProvider>} />
    
    <Route path="/Admin" element={<DarkModeContextProvider> <Admin/>  </DarkModeContextProvider>}/>
 
    <Route path="/Lecturer/:mail" element={<DarkModeContextProvider> <Lecturer/>  </DarkModeContextProvider>}/>

    <Route path="/Login_Admin" element={<Login_Admin/>}/>

    <Route path="/Login_Lecturer" element={<Login_Lecturer/>}/>

    <Route path="/Login_Student" element={<Login_Student /> }/>

    <Route path="/Lecturer/:mail/MarkAttendance" element={<List/>}/>

    <Route path="/Lecturer/:mail/ModifyAttendance" element={<List2/>}/>

    <Route path="/Student/:mail/MyAttendance" element={<AttendancePage/>}/>

    <Route path="/Admin/ModifyStudents" element={<StudentsTable/>}/>

    <Route path="/Admin/LeaveRequests" element={<LeaveRequest/>}/>

    <Route path="/Student/:mail/LeaveRequest" element={<Write/>}/>

    </Routes>
    </Router>
    </>
  );
}

export default App;
