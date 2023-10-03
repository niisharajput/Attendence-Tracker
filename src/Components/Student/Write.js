import { useContext, useState } from "react";
import "./write.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useParams } from "react-router";

export default function Write() {

  return (
    <div className='list'>
      {/* <Sidebar/> */}
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
      <div className='listContainer'>
        <Navbar/>
    <div className="write">
      <form className="writeForm">
      <input type="date" id="start_date"></input>
      <input type="date" id="end_date"></input>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Main Reason for Leave"
            className="writeInput"
            autoFocus={true}
            // onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Report Your Concern..."
            type="text"
            className="writeInput writeText"
            // onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Send Request
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}
