import React, { useContext } from "react";
import Sidebar from "../Components/Admin/Sidebar";
import "./Admin.scss";
import Widgets from "../Components/Admin/Widgets";
import Featured from "../Components/Admin/Featured";
import Charts from "../Components/Admin/Charts";
import Navbar from "../Components/Admin/Navbar";
import '../Styles/DarkMode.scss'
import { DarkModeContext } from "../Contexts/DarkModeContext";
export default function Admin() {

  const {darkMode}=useContext(DarkModeContext)
  
  return (
    <div>
      <div className={darkMode?"home dark":"home"}>
      <div>
        <Sidebar />
      </div>
        <div className="homeContainer">
        <Navbar/>
          <div className="boxes">
            <Widgets />
          </div>
          <div className="chartsComponent">
            <Featured />
            <Charts />
          </div>
        </div>
      </div>
      
    </div>
  );
}
