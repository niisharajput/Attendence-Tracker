import "./Datatable.scss";
// import { checkGridRowIdIsValid, DataGrid, GridLoadingOverlay, selectedIdsLookupSelector } from "@mui/x-data-grid";
// import { userColumns } from "../../Datatablesource";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const MarkAttendance = () => {
  var isloading = false;
  var data = [{"branch" : "CS", "id" : 1, "name" : "Name"}, {"branch" : "CS", "id" : 3, "name" : "Name"}, {"branch" : "CS", "id" : 2, "name" : "Name"}];
  var ids = [];
  return (
    <>
    <div>
        Mark Attendance
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
        <div id="tables" style={{display : "none"}}>
    <div className="table-responsive">
    <table className="table">
  <thead>
    <tr>
    <th>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="main_checkbox" />
        </div>
      </th>
      <th scope="col">Student Id</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {  isloading ? <tr><th>Loading...</th></tr> : data.map((row) => {
    var no = "L" + row.branch + "2021"
    row.id<10 ? no += "00" : no += "0";
      return (
      <tr key={row.id}>
      <td>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id={`cb${row.id}`} />
        </div>
      </td>
      <th scope="row">{no+row.id}</th>
      <td>{row.name}</td>
      <td>
        <div className="cellAction">
          <div className="presentButton" id={`p${row.id}`} >Present</div>
          <div className="absentButton" id={`a${row.id}`} >Absent</div>
        </div>
      </td>
      </tr> );
    })
  }
  </tbody>
</table>
{ 
  ids.map((item) => {
  return (
  <label>{item}</label> )
}) }
</div>
<button>Submit</button>
</div>
</>
  );
};

export default MarkAttendance;


