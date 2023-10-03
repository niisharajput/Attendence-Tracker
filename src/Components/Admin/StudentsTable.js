import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './List.scss'
import ModifyStudents from './ModifyStudents'


export default function StudentsTable() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <ModifyStudents/>
      </div>
    </div>
  )
}
