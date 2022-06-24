import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function card({ data }) {
  const { title, price, filename, description } = data;

  return (
    <div className="main">
      <div className="mcard">
        <img src={filename} alt="Product" />
      </div>
      <div className="bcard">
        <p className="tit">{title}</p>
        <p className="desc">{description}</p>
        <p className="pri">₹:{price}</p>
        <p className="view">
          <Link to={`/item/${title}`}>View</Link>
        </p>
      </div>
    </div>
  );
}

export default card;
