import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../CartIcon/CartIcon";
import "./Header.css";

const Header = ({
  title,
  backIcon,
  searchIcon,
  cartIcon,
  backIconLink,
  searchIconLink,
  cartIconLink,
  cartCounter,
}) => {
  return (
    <header className="header">
      {backIcon && (
        <Link className="Link" to={backIconLink}>
          <div className="back-arrow-wrapper">
            {<i className={backIcon}></i>}
          </div>
        </Link>
      )}
      <p className="header-text">{title}</p>
      <div className="search-cart-container">
        {searchIcon && (
          <Link className="Link" to={searchIconLink}>
            <div className="search-cart-wrapper">
              <i className={searchIcon}></i>
            </div>
          </Link>
        )}
        {cartIcon && (
          <Link className="Link" to={cartIconLink}>
            <CartIcon cartCounter={cartCounter} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
