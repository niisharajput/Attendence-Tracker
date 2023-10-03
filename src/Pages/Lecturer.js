import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "../Components/Lecturer/Sidebar";
import "./Admin.scss";
import Widgets from "../Components/Lecturer/Widgets";
import Featured from "../Components/Lecturer/Featured";
import Charts from "../Components/Lecturer/Charts";
import Navbar from "../Components/Lecturer/Navbar";
import '../Styles/DarkMode.scss'
import { DarkModeContext } from "../Contexts/DarkModeContext";
import { useParams } from "react-router";

export default function Lecturer() {
  const { mail } = useParams();
  var course_no = "";
  var i = 0;
  for(i;i<mail.length;i++) {
    if(mail[i+1] == '@')
      break;
  }
  course_no += `${mail[i]}`

  const {darkMode}=useContext(DarkModeContext)
  
  return (
    <div>
      <div className={darkMode?"home dark":"home"}>
        <Sidebar />
        <div className="homeContainer">
        <Navbar/>
        <Widgets course_no = { course_no } />
          <div className="chartsComponent">
            <Featured />
            <Charts />
          </div>
        </div>
      </div>
      
    </div>
  );
}
