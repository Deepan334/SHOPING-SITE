import React, { useEffect } from "react";
import './Singleitem.css'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { product, adtoCart } from "../redux/actions/Action.js";
function SingleItem() {
  const dis = useDispatch();
  const sel = useSelector((s) => s.Reducer);
  let titl = useParams();

  useEffect(() => {
    dis(product(titl));
  }, []);
  const { filename, price, title, description } = sel.product;

  const toCart = () => {
    dis(adtoCart(sel.product));
  };
  console.log(sel.Cart);
  return (
    <div className="main-card">
      <div className="left-card">
        <img src={filename} alt="product" />
        <p className="p1">{title}</p>
        <p className="p3">{description}</p>
        <p className="p2">₹:{price}</p>
      </div>
      <div className="right-card">
        <div className="title"> Subtotal </div>
        <div className="addto"><a onClick={() => { toCart() }}>Add to Cart</a></div>
      </div>
    </div>
  );
}

export default SingleItem;

// const navigate = useNavigate();
// const toCart=()=>{
//   navigate('/Cart', { state: sel});
// }
