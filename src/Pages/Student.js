import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import Sidebar from "../Components/Student/Sidebar";
import "./Admin.scss";
import Widgets from "../Components/Student/Widgets";
import Featured from "../Components/Student/Featured";
// import Charts from "../Components/Student/Charts";
import Navbar from "../Components/Student/Navbar";
import "../Styles/DarkMode.scss";
import { DarkModeContext } from "../Contexts/DarkModeContext";

export default function Student() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div className={darkMode ? "home dark" : "home"}>
        {/* <Sidebar /> */}
        <div
            className="offcanvas-lg offcanvas-end"
            tabIndex="-1"
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
             <div className="offcanvas-header"> 
              <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
                Menu
              </h5> 
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-label="Close"
              ></button>
             </div>
            <div className="offcanvas-body">{<Sidebar />}</div>
          </div>
        <div className="homeContainer">
          <Navbar />
          

          {/* <div className="alert alert-info d-none d-lg-block">
            Resize your browser to show the responsive offcanvas toggle.
          </div> */}

          
          <div className="boxes">
            <Widgets />
          </div>
          <div className="chartsComponent">
            <Featured />
            <Featured />
          </div>
        </div>
      </div>
    </div>
  );
}
