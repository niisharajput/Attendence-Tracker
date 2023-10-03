import React from "react";
import { useParams } from "react-router";
import "./Widgets.scss";
export default function Widgets() {
  const { mail } = useParams();
  var course_no = "";
  var i = 0;
  for(i;i<mail.length;i++) {
    if(mail[i+1] == '@')
      break;
  }
  course_no += `${mail[i]}`
  return (
  <div className="widgets">
    <div className="widget">
        <span className="title">Total Classes</span>
        <span className="counter">100</span>
    </div>
    <div className="widget">
        <span className="title">Total Students</span>
        <span className="counter">200</span>
    </div>
  </div>
  );
}
