import * as con from "../action_constant/Constants.js";
const initial = {
  products: [],
  product: [],
  Cart: [],
  loading: false,
};

export const Reducer = (state = initial, action) => {
  switch (action.type) {
    case con.GET_ALLPRODUCT_REQUEST:
      return { ...state, loading: true };
    case con.GET_ALLPRODUCT_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case con.GET_ALLPRODUCT_FAILED:
      return { ...state, loading: false };
    case con.GET_SINGELPRODUCT:
      return { ...state, product: action.payload };
    case con.SHOW_ALLITEMS_IN_CART:
      return state;
    case con.ADD_TO_CART:
      return { ...state, Cart: [...state.Cart, action.payload] };
    case con.REMOVE_FROM_CART:
      return {
        ...state,
        Cart: state.Cart.filter((x) => x._id !== action.payload),
      };
    default:
      return state;
  }
};
