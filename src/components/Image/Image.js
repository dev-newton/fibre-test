import React from "react";
import "./Image.css";

const Image = ({ image }) => {
  return (
    <div className="img-container">
      <div className="img-wrapper">
        <img className="img-product" src={image} alt="product-img" />
      </div>
    </div>
  );
};

export default Image;
