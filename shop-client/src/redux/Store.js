import { createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer } from "./reducer/Reducer.js";
import thunk from "redux-thunk";

const RootReducer = combineReducers({ Reducer });
const Middleware = [thunk];

const store = createStore(RootReducer, applyMiddleware(...Middleware));
export default store;
