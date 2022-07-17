import {
  PRODUCTS_REQ,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
} from "./actionTypes";

const initState = {
  products: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  console.log(state, action);

  switch (action.type) {
    case PRODUCTS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
