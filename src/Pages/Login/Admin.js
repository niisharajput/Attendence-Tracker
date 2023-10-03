import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.scss";

export default function Login_Admin() {
  return (
    <>
      <div className="outBox">
      <div className="content">
      <h2>Admins Login Portal</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <label className="gridContainer grid-item-1">Email id:</label>
              </td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label className="gridContainer grid-item-2">Password:</label>
              </td>
              <td>
                <input type="text"></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="gridContainer grid-item-3">
          <Link to={`/Admin`} style={{ textDecoration: "none" , color: "white"}}>Submit</Link>
        </button>
      </div>
      </div>
    </>
  )
}
