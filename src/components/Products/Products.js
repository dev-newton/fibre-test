import React from "react";
import "./Products.css";

const Products = ({ children }) => {
  return (
    <div className="products-container">
      <div className="products-wrapper">{children}</div>
    </div>
  );
};

export default Products;
