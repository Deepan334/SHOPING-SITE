import React from "react";
import "./Back.css";
const Back = ({ show, off }) => {
  return show && <div className="back" onClick={off}></div>;
};

export default Back;
