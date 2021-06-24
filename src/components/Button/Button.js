import React from "react";
import "./Button.css";

const Button = ({ buttonText, buttonStyle, style, onClick }) => {
  return (
    <li onClick={onClick} className="nav-btn-wrapper">
      <button style={style} className={`nav-btn ${buttonStyle}`}>
        {buttonText}
      </button>
    </li>
  );
};

export default Button;
