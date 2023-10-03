import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router";
export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1>Attendance</h1>
        <label>13th Jul</label>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={75} text={`75%`} strokeWidth={6} />
        </div>
        <p className="title">Total lectures attended</p>
        <p className="amount">{`1 / 9`}</p>
        <div className="summary">
        </div>
      </div>
    </div>
  );
}
