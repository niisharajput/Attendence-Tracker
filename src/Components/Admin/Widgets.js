import React from "react";
import "./Widgets.scss";
export default function Widgets() {
  return (
  <div className="widgets">
    <div className="widget">
        <span className="title">Total Students</span>
        <span className="counter">400</span>
    </div>
    <div className="widget">
        <span className="title">Interested Students</span>
        <span className="counter">360</span>
    </div>
  </div>
  );
}
