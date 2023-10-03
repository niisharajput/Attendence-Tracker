import React, { useContext } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import "../../Styles/Navbar.scss";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="items">
            <div className="item">
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  dispatch({ type: "TOGGLE" });
                }}
              >
                dark_mode
              </span>
            </div>
            <div className="item">
              <span className="material-symbols-outlined">notifications</span>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
            <div className="item">
            <span className="material-symbols-outlined">logout</span>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logout"> Logout</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
