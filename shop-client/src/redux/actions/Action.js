import * as con from "../action_constant/Constants.js";
import axios from "axios";
const Port = "http://localhost:5000";

const getreq = () => {
  return {
    type: con.GET_ALLPRODUCT_REQUEST,
  };
};
const getall = (data) => {
  return {
    type: con.GET_ALLPRODUCT_SUCCESS,
    payload: data,
  };
};
const getfail = () => {
  return {
    type: con.GET_ALLPRODUCT_FAILED,
  };
};

const getone = (data) => {
  return {
    type: con.GET_SINGELPRODUCT,
    payload: data,
  };
};

export const allProduct = () => async (dispatch) => {
  try {
    await dispatch(getreq());
    const res = await axios.get(Port);
    dispatch(getall(res.data));
  } catch (error) {
    dispatch(getfail());
    console.log(error.message);
  }
};

export const product = (dat) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${Port}/${dat.id}`);
    dispatch(getone(data));
  } catch (error) {
    console.log(error);
  }
};
export const adtoCart = (req) => async (dispatch, getState) => {
  try {
    await dispatch({ type: con.ADD_TO_CART, payload: req });
    localStorage.setItem("Cart", JSON.stringify(getState().Reducer.Cart));
  } catch (error) {
    console.log(error);
  }
};
export const removefromCart = (prop) => async (dispatch, getState) => {
  try {
    await dispatch({ type: con.REMOVE_FROM_CART, payload: prop });
    localStorage.setItem("Cart", JSON.stringify(getState().Reducer.Cart));
  } catch (error) {
    console.log(error);
  }
};
