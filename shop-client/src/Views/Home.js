import React, { useState, useEffect } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { allProduct } from "../redux/actions/Action.js";
import Card from "../components/homeScreenCard/Card.js";

function Home() {
  const st = useSelector((s) => s.Reducer.products);
  const disp = useDispatch();
  const [item, setItem] = useState();
  useEffect(() => {
    disp(allProduct());
  }, []);

  useEffect(() => {
    setItem(st);
  });

  return (
    <div className="home">
      <div className="title">Latest Products</div>
      <div className="card">
        {item
          ? item.map((data) => <Card key={data._id} data={data} />)
          : "Loading..."}
      </div>
    </div>
  );
}

export default Home;
