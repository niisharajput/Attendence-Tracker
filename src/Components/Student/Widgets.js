import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Widgets.scss";
export default function Widgets() {
  return (
  <div className="widgets">
    <div className="widget">
        <span className="title">Total Classes</span>
        <span className="counter">5</span>
    </div>
    <div className="widget">
        <span className="title">Present</span>
        <span className="counter">4</span>
    </div>
    <div className="widget">
        <span className="title">Absent</span>
        <span className="counter">1</span>
    </div>
    <div className="widget">
        <span className="title" style={{color : "white"}}>Percentage</span>
        <span className="counter">80%</span>
    </div>
  </div>
  );
}
