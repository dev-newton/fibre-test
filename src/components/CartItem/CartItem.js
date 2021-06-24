import React from "react";
import NumberFormat from "react-number-format";

import "./CartItem.css";

const CartItem = ({
  key,
  img,
  cartProductName,
  cartProductPrice,
  cartQuantity,
  minusClicked,
  plusClicked,
  deleteClicked,
}) => {
  return (
    <div key={key} className="cart-item-wrapper">
      <div className="cart-item-details">
        <img src={img} alt="cartImg" className="cart-item-img" />
        <div className="cart-info-wrapper">
          <p className="cart-info-text">{cartProductName}</p>
          <p className="cart-info-price">
            &#8358;
            <NumberFormat
              value={cartProductPrice}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>
      </div>
      <hr className="cart-divider" />
      <div className="cart-controller-container">
        <div onClick={deleteClicked} className="cart-controller-wrapper">
          <i className="fas fa-trash"></i>
          <p className="cart-delete">Delete</p>
        </div>
        <div className="cart-controller-wrapper">
          <div onClick={minusClicked} className="cart-circle">
            <i className="fas fa-minus"></i>
          </div>
          <p className="cart-qty">{cartQuantity}</p>
          <div onClick={plusClicked} className="cart-circle">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
