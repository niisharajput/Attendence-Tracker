import React, { useCallback, useEffect, useState } from 'react'
import MyAttendance from './MyAttendance'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './List.scss'


export default function AttendancePage() {
  return (
    <div className='list'>
    <div className='Sidebar'>
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
    </div>
      <div className='listContainer'>
        <Navbar/>
        <MyAttendance/>
      </div>
    </div>
  )
}
