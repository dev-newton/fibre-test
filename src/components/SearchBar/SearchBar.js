import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  placeholder,
  onChange,
  onClick,
  value,
  searchErrorMessage,
}) => {
  return (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder={placeholder}
          type="text"
          onChange={onChange}
          value={value}
        />
        <i onClick={onClick} className="fas fa-search"></i>
      </div>
      <small className="search-error-text">{searchErrorMessage}</small>
    </>
  );
};

export default SearchBar;
