export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};

export const increaseCartItemQty = (cartItemId) => {
  return { type: INCREASE_QTY, payload: cartItemId };
};

export const decreaseCartItemQty = (productId) => {
  return { type: DECREASE_QTY, payload: productId };
};

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, payload: productId };
};
