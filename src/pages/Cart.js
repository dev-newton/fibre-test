import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";

import {
  removeFromCart,
  decreaseCartItemQty,
  increaseCartItemQty,
} from "../store/actions/cart";
import Header from "../components/Header/Header";
import pic1 from "../assets/images/Rectangle.png";
import pic2 from "../assets/images/Rectangle2.png";
import pic3 from "../assets/images/Rectangle1.png";
import CartItem from "../components/CartItem/CartItem";
import Button from "../components/Button/Button";
import Products from "../components/Products/Products";
import Product from "../components/Products/Product";

const Cart = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];

    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
        productImage: state.cart.items[key].productImage,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  return (
    <div>
      <Header backIcon="fas fa-chevron-left" backIconLink="/buy" title="Cart" />

      <div className="cart-item-container">
        {!cartItems.length && (
          <p style={{ textAlign: "center" }}>Cart is empty!</p>
        )}
        {cartItems.map((item, i) => (
          <CartItem
            key={i}
            img={item.productImage}
            cartProductName={item.productTitle}
            cartProductPrice={item.productPrice}
            cartQuantity={item.quantity}
            deleteClicked={() => dispatch(removeFromCart(item.productId))}
            minusClicked={() => dispatch(decreaseCartItemQty(item.productId))}
            plusClicked={() => dispatch(increaseCartItemQty(item.productId))}
          />
        ))}
      </div>

      <div className="checkout-container">
        <div className="subtotal-wrapper">
          <p className="subtotal-text">Subtotal</p>
          <p className="subtotal-price">
            &#8358;{" "}
            <NumberFormat
              value={cartTotalAmount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>
        <div className="subtotal-wrapper">
          <p className="subtotal-text">Total</p>
          <p className="total-price">
            &#8358;
            <NumberFormat
              value={cartTotalAmount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>

        <div className="checkout-btn">
          <Button
            onClick={() => console.log("wishlist button clicked")}
            buttonStyle="btn-primary"
            style={{ padding: 16, marginTop: 8 }}
            buttonText="Checkout"
          />
        </div>
        <hr className="checkout-hr" />
      </div>

      <div className="recent-container">
        <div className="recent-wrapper">
          <p className="recent-text">Recently viewed</p>
          <p className="recent-view">View all</p>
        </div>
        <Products>
          <div className="products-wrapper">
            <Product
              productImage={pic1}
              productName="Nike Slides"
              productPriceRange="&#8358;900 - &#8358;1,500"
              productQuantity="4"
            />
            <Product
              productImage={pic3}
              productName="Nike Slides"
              productPriceRange="&#8358;900 - &#8358;1,500"
              productQuantity="4"
            />
            <Product
              productImage={pic2}
              productName="Nike Slides"
              productPriceRange="&#8358;900 - &#8358;1,500"
              productQuantity="4"
            />
          </div>
        </Products>
      </div>
    </div>
  );
};

export default Cart;
