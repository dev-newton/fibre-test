import { PRODUCTS } from "../../data/dummy-data";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_LOCATIONS = "GET_PRODUCT_LOCATIONS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: PRODUCTS,
    });
  };
};

export const fetchProductLocations = () => {
  return async (dispatch) => {
    const location = PRODUCTS.filter(
      (product, i, a) =>
        a.findIndex((t) => t.location === product.location) === i
    ).map((product) => product.location);

    dispatch({
      type: GET_PRODUCT_LOCATIONS,
      payload: location,
    });
  };
};

export const fetchProductById = (product_id) => {
  return async (dispatch) => {
    const product = PRODUCTS.find((product) => product.id === product_id);

    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: product,
    });
  };
};
