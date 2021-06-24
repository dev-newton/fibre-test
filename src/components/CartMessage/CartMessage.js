import React from "react";
import "./CartMessage.css";

const CartMessage = ({ message, hideMessage, onClick }) => {
  return (
    <div className={`cart-add-message-wrapper ${hideMessage && "hide"}`}>
      <p className="cart-add-message">{message}</p>
      <i onClick={onClick} className="fas fa-times"></i>
    </div>
  );
};

export default CartMessage;
