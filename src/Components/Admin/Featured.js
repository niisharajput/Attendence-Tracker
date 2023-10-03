import React from "react";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1>Lectures</h1>
        <label>1st Jan</label>
      </div>  <br />
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={175/2} text={`${175/2}%`} strokeWidth={6} />
        </div> <br />
        <p className="title">Total students attended</p>
        <p className="amount">175</p>
      </div>
    </div>
  );
}
