import "./Datatable.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ModifyAttendance = () => {
  var uploaded = [{"branch" : "IT", "roll_no" : 10, "status" : "a"}, {"branch" : "IT", "roll_no" : 19, "status" : "p"}, {"branch" : "IT", "roll_no" : 15, "status" : "p"}, {"branch" : "IT", "roll_no" : 12, "status" : "a"}]
  return (
    <>
    <div>
        Modify Attendance
      </div>
      <div>
      <select id="branch">
        <option style={{display : "none"}}></option>
        <option value="0">CS</option>
        <option value="1">IT</option>
        <option value="2">CSAI</option>
        <option value="3">CSB</option>
      </select>
      <input type="date" id="date"></input>
      <button>Get Details</button>
        </div>
    <div className="table-responsive" id="table" style={{display : "none"}}>
    <table className="table">
  <thead>
    <tr>
    <th>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        </div>
      </th>
      <th scope="col">Student Id</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {  uploaded.length == 0 ? <tr><th colSpan="4" style={{textAlign : "center"}}>No Records Found...</th></tr> : uploaded.map((row) => {
    var no = "L" + row.branch + "2021"
    var present_bg = "white";
    var present_cl = "green";
    var absent_bg = "white";
    var absent_cl = "red";
    row.roll_no<10 ? no += "00" : no += "0";
    if(row.status == "p") {
      present_bg = "green"
      present_cl = "white"
    }
    else {
      absent_bg = "red"
      absent_cl = "white"
    }
      return (
      <tr key={row.roll_no}>
      <td>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id={`cb${row.roll_no}`} />
        </div>
      </td>
      <th scope="row">{no+row.roll_no}</th>
      <td>{row.name}</td>
      <td>
        <div className="cellAction">
          <div className="presentButton" id={`p${row.roll_no}`}  style={{backgroundColor : `${present_bg}`, color : `${present_cl}`}}>Present</div>
          <div className="absentButton" id={`a${row.roll_no}`}  style={{backgroundColor : `${absent_bg}`, color : `${absent_cl}`}}>Absent</div>
        </div>
      </td>
      </tr> );
    })
  }
  </tbody>
</table>
{uploaded.length != 0 ? <button>Submit</button> : <div></div>
}
</div>
</>
  );
};

export default ModifyAttendance;


