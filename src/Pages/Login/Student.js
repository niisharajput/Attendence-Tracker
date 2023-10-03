import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import "./Login.scss";
import photo from './StudentLogin.png'

export default function Login_Student(props) {
  const { user, dispatch } = useContext(UserContext)
  const role = "Student"
  const [mail, setMail] = useState("")
  const setmail = () => {
      const input = document.getElementById("mail")
      setMail(input.value);
  }
  const [password, setPassword] = useState("");
  
  const style={
    fontWeight: 'bold',
    fontSize: 18
  }

  async function loginTheStudent(event) {
    event.preventDefault();
    try {
    axios.post('http://localhost:8082/user/get_user', { "mail" : `${mail}`, "password" : `${password}`})
    .then(info => {
      console.log(info);
        const contentBox = document.querySelector(".errorBox");
        if (info.data.user) {
          if(role != info.data.role) {
            contentBox.innerHTML = `<div className=error-div id="div" style="
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            border: 1px solid red;
            color: red;
            border-radius: 2px;
            min-height:50px;
            min-width:330px;
          " >
          <span class="material-symbols-outlined">
    error
    </span> You are ${info.data.role}, Please login through ${info.data.role}'s Portal 
          </div>`
          setTimeout(() => {
            var div = document.getElementById("div")
            div.style.display = "none"
          }, 5000);
          }
          else {
          alert("Login Sucessful");
          dispatch({ type : "LOGIN"})
          console.log(user);
          // window.location.href = `/Student/${mail}`; 
        }
        } else {
            contentBox.innerHTML = `<div className=error-div id="div" style="
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            border: 1px solid red;
            color: red;
            border-radius: 2px;
            min-height:50px;
            min-width:330px;
          " >
          <span class="material-symbols-outlined">
    error
    </span> Incorrect email or password
          </div>`
          setTimeout(() => {
            var div = document.getElementById("div")
            div.style.display = "none"
          }, 5000);
          }
        });
      }
      catch (err) {

      }
  }
  return (
    <>
      <div className="login">
        <div className="login_left">
        <span id="sideTitle">Welcome Back!</span>
        <form onSubmit={(e) => {loginTheStudent(e)}}>
        <div className="outBox">
          <div className="content">
            <label className="errorBox"></label>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label className="login_title" style={{margin : "20px"}}>Mail : </label>
                  </td>
                  <td>
                    <div className="col-sm">
                      <input
                        type="email"
                        className="form-control"
                        id="mail" onChange={setmail}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="login_title" style={{margin : "20px"}}>Password : </label>
                  </td>
                  <td>
                    <div className="col-sm">
                      <input
                        value={password}
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
              <div className="d-grid col-9">
              <input className="btn" type="submit" value="Login" style={style}></input>
            </div>
          </div>
        </div>
      </form>
        </div>
        <div className="login_right">
        <span id="title">Student's Login</span>
          <img src={photo} id="photo_login"/>
  </div>
      </div>
    </>
  );
  }