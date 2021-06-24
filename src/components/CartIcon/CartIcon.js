import React from "react";
import "./CartIcon.css";

const CartIcon = ({ cartCounter }) => {
  return (
    <div className="cart-wrapper">
      <i className="fas fa-shopping-cart"></i>
      <i className="cart-counter">
        <p style={{ textAlign: "center" }}>{cartCounter}</p>
      </i>
    </div>
  );
};

export default CartIcon;
