import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
} from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
  items: {},
  totalAmount: 0,
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const prodPrice = parseInt(addedProduct.price);
      const prodTitle = addedProduct.name;
      const prodImg = addedProduct.image;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // already exists in the cart
        const prodQuantity = parseInt(
          state.items[addedProduct.id].quantity + 1
        );

        updatedOrNewCartItem = new CartItem(
          prodQuantity,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice,
          prodImg
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          prodPrice,
          prodTitle,
          prodPrice,
          prodImg
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
        count: state.count + 1,
      };

    case INCREASE_QTY:
      const productId2 = action.payload;
      const selectedCartItem2 = state.items[productId2];

      let updatedCartItems2;

      const updatedCartItem2 = new CartItem(
        selectedCartItem2.quantity + 1,
        selectedCartItem2.productPrice,
        selectedCartItem2.productTitle,
        selectedCartItem2.sum + selectedCartItem2.productPrice,
        selectedCartItem2.productImage
      );
      updatedCartItems2 = { ...state.items, [productId2]: updatedCartItem2 };

      return {
        ...state,
        items: updatedCartItems2,
        totalAmount: state.totalAmount + selectedCartItem2.productPrice,
        count: state.count - 1,
      };

    case DECREASE_QTY:
      const productId = action.payload;
      const selectedCartItem = state.items[productId];
      const currentQty = selectedCartItem.quantity;

      let updatedCartItems;

      if (currentQty > 1) {
        //need to reduce it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice,
          selectedCartItem.productImage
        );
        updatedCartItems = { ...state.items, [productId]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[productId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
        count: state.count - 1,
      };

    case REMOVE_FROM_CART:
      const product_id = action.payload;
      const selectedCartItem1 = state.items[product_id];
      const currentQty1 = selectedCartItem1.quantity;

      let updatedCartItems1;

      updatedCartItems1 = { ...state.items };
      delete updatedCartItems1[product_id];

      return {
        ...state,
        items: updatedCartItems1,
        totalAmount:
          state.totalAmount - selectedCartItem1.productPrice * currentQty1,
        count: state.count - 1,
      };
  }
  return state;
};
