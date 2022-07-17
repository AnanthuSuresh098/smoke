import {
  PRODUCTS_REQ,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
} from "./actionTypes";

import axios from "axios";

// action for products request

const productsReq = () => ({
  type: PRODUCTS_REQ,
});

// action for products success

const productsSuccess = (payload) => ({
  type: PRODUCTS_SUCCESS,
  payload,
});

// action for products failure

const productsFailure = () => ({
  type: PRODUCTS_FAILURE,
});

// thunk call to fetch products

export const productsData = () => (dispatch) => {
  dispatch(productsReq());
  axios
    .get("https://movieapp-00.herokuapp.com/products")
    .then((res) => dispatch(productsSuccess(res.data)))
    .catch(() => dispatch(productsFailure()));
};
