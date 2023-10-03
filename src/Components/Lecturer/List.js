import React, { useCallback, useEffect, useState } from 'react'
import MarkAttendance from './MarkAttendance'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './List.scss'


export default function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <MarkAttendance/>
      </div>
    </div>
  )
}
