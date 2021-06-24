import React from "react";
import Button from "../Button/Button";

const Navbuttons = ({ onClick }) => {
  return (
    <ul className="nav-btn-items">
      <div className="nav-btn-container">
        <Button
          onClick={onClick}
          buttonStyle="btn-primary"
          buttonText="Add to cart"
        />
        <Button
          onClick={() => console.log("wishlist button clicked")}
          buttonStyle="btn-outline"
          buttonText="Wishlist"
        />
      </div>
    </ul>
  );
};

export default Navbuttons;
