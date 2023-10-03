import React, { useContext } from "react";
import "../../Styles/Sidebar.scss";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../Contexts/DarkModeContext";
export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/Admin" style={{ textDecoration: "none"}}>
          <span>Admin</span>
        </Link>
      </div>
      <div className="centre">
        <div>
        
        <ul>
        <label>MAIN</label>
          <li>
            <span className="material-symbols-outlined">dashboard</span>
            <Link to="/Admin" style={{ textDecoration: "none"}}>
            <span>Dashboard</span>
            </Link>
          </li>
        </ul>
        </div>
        <div>
          <ul>
          <label>SERVICES</label>
          <li>
          <Link to="/Admin/ModifyStudents" style={{ textDecoration: "none" }}>
            <span>Modify Students</span>
            </Link>
          </li>
          <li>
          <Link to="/Admin/LeaveRequests" style={{ textDecoration: "none" }}>
            <span>Leave Request</span>
            </Link>
          </li>
          <li>
          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <span>View Report</span>
            </Link>
          </li>
          </ul>
          </div>
          <div>
          <ul>
          <label>USER</label>
          <li>
            <span className="material-symbols-outlined">account_circle</span>
            <span>Profile</span>
          </li>
          <li>
            <span className="material-symbols-outlined">logout</span>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logout"> Logout</span>
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
