// import "./Datatable.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { display } from "@mui/system";

const LeaveRequest = () => {
  
const requests = [{"reason" : "Hello1", "desc" : "Sick Leave"}, {"reason" : "Hello2", "desc" : "Sick Leave"}, {"reason" : "Hello3", "desc" : "Sick Leave"}] 

  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
      <div>
      { requests.map((item) => {
        return (
        <div>
        <h1>{item.reason}</h1>
        <label>{item.desc}</label>
        </div>
      )
      })
      }
      </div>
      </div>
    </div>
    
  );
};

export default LeaveRequest;


