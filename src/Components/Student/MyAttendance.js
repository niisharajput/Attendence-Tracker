import "./Datatable.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const MyAttendance = () => {
  var uploaded = [{"date" : "2022-07-13", "course_name" : "Course1", "status" : "p"}, {"date" : "2022-07-13", "course_name" : "Course1", "status" : "p"}, {"date" : "2022-07-13", "course_name" : "Course1", "status" : "p"}]
  return (
    <>
    <div>
      Attendance
      </div>
      <div>
      <input type="date" id="date"></input>
      <button>Get Details</button>
        </div>
    <div className="table-responsive" id="table" style={{display : "none"}}>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Course Name</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {  uploaded.length == 0 ? <tr><th colSpan="4" style={{textAlign : "center"}}>No Records Found...</th></tr> : uploaded.map((row) => {
      return (
      <tr key={row.roll_no}>
      <th scope="row">{row.date}</th>
      <td>{row.course_name}</td>
      <td>
        <div className="cellAction">
        {row.status == 'p'
        ?  <div className="presentButton"style={{backgroundColor : "green", color : "white"}}>Present</div>
        : <div className="absentButton"style={{backgroundColor : "red", color : "white"}}>Absent</div>
        }
        </div>
      </td>
      </tr> );
    })
  }
  </tbody>
</table>
</div>
</>
  );
};

export default MyAttendance;


