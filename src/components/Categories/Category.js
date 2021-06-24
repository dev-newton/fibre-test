import React from "react";

const Category = ({ categoryColor, categoryText, categoryIcon }) => {
  return (
    <div className="category">
      <div className="category-box" style={{ backgroundColor: categoryColor }}>
        <i className={categoryIcon}></i>
      </div>
      <p className="category-text">{categoryText}</p>
    </div>
  );
};

export default Category;
