// import "./Datatable.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { display } from "@mui/system";

const ModifyStudents = () => {
  var studentslist = [];
  return (
    <>
    <div>
        Modify Students
      </div>
      <div>
        <select id="branch">
        <option style={{display : "none"}}></option>
        <option value="0">CS</option>
        <option value="1">IT</option>
        <option value="2">CSAI</option>
        <option value="3">CSB</option>
      </select>
      <button>Get Details</button>
        </div>
        <div id="tables" style={{display : "none"}}>
        <div className="table-responsive" >
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody id="tbody">
      <tr>
      <th><input placeholder="Student Id" id="sid1"/></th>
      <th><input placeholder="Student Name" id="sname1"/></th>
      </tr>
  </tbody>
</table>
<button>Add</button>
</div>
    <div className="table-responsive">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {  studentslist.length == 0 ? <tr><th></th><td>No Records Found...</td><td></td></tr> : studentslist.map((row) => {
    var no = "L" + row.branch + "2021"
    row.id<10 ? no += "00" : no += "0";
      return (
      <tr key={row.id}>
      <th scope="row">{no+row.id}</th>
      <td>{row.name}</td>
      <td>
        <div className="cellAction">
          <div className="absentButton" id={`d${row.id}`}>Remove</div>
        </div>
      </td>
      </tr> );
    })
  }
  </tbody>
</table>
</div>
</div>
<button >Submit</button>
</>
  );
};

export default ModifyStudents;


