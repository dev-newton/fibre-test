import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_LOCATIONS,
} from "../actions/products";

const initialState = {
  products: [],
  product_locations: [],
  product_by_id: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_LOCATIONS:
      return {
        ...state,
        product_locations: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product_by_id: action.payload,
      };
  }
  return state;
};
