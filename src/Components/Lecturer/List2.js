import React, { useCallback, useEffect, useState } from 'react'
import ModifyAttendance from './ModifyAttendance'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './List.scss'


export default function List2() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <ModifyAttendance/>
      </div>
    </div>
  )
}
