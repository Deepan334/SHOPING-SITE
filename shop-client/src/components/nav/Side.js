import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Side.css";

const Side = ({ side }) => {
  const ca = useSelector((s) => s.Reducer.Cart);

  return side ? (
    <div className="side show">
      <ul className="a">
        <li className="fist">
          <Link to="./Cart">
            Cart {ca.length} <span></span>
          </Link>
        </li>
        <li className="sec">
          <Link to="./">Shop</Link>
        </li>
      </ul>
    </div>
  ) : (
    <div className="side"></div>
  );
};

export default Side;
