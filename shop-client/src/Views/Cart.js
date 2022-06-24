import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "../redux/actions/Action.js";

function Cart() {
  // const location = useLocation();
  const ar = useSelector((s) => s.Reducer.Cart);

  return (
    <div>
      <div>
        {ar
          ? ar.map((res) => <CartCard key={res._id} res={res} />)
          : "No Item IN Cart"}
      </div>
    </div>
  );
}
export default Cart;

const CartCard = (prop) => {
  const { _id, title, price, description, filename } = prop.res;

  const dispa = useDispatch();
  const del = (id) => {
    dispa(removefromCart(id));
  };

  return (
    <div className="main-cart">
      <div className="left-cart">
        <img src={filename} alt="prod" />
        <p className="pt">{title}</p>
        <p className="pd">{description}</p>
        <p className="pp">₹:{price}</p>
      </div>
      <div className="right-cart">
        <button
          onClick={() => {
            del(_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
