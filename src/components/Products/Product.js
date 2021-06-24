import React from "react";

import { Link } from "react-router-dom";

const Category = ({
  productImage,
  productName,
  productPriceRange,
  productQuantity,
  linkTo,
  key,
}) => {
  return (
    <Link key={key} className=" Link product " to={linkTo}>
      <div className="product-c">
        <img className="product-img" src={productImage} alt="p-img" />
        <p className="product-name">{productName}</p>
        <p className="product-price-range">{productPriceRange}</p>
        <p className="product-moq">MOQ {productQuantity} (pieces)</p>
      </div>
    </Link>
  );
};

export default Category;
