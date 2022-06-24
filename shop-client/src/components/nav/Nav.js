import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = ({ click }) => {
  const ca = useSelector((s) => s.Reducer.Cart);
  console.log(ca.length);
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Home</h1>
      </div>
      <ul className="navlink">
        <li>
          <Link to="./Cart">
            <span className="cart">
              Cart<span>{ca.length}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="./">Shop</Link>
        </li>
      </ul>
      <div className="box" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
