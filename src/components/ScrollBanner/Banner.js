import React from "react";

const Banner = ({
  bannerColor,
  bannerImg,
  bannerText,
  bannerTextColor,
  bannerButtonText,
  bannerButtonColor,
  bannerButtonTextColor,
}) => {
  return (
    <div
      className={"banner"}
      style={{
        backgroundColor: bannerColor,
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <p className="banner-text" style={{ color: bannerTextColor }}>
        {bannerText}
      </p>
      <button
        className="banner-btn"
        style={{
          backgroundColor: bannerButtonColor,
          color: bannerButtonTextColor,
        }}
      >
        {bannerButtonText}
      </button>
    </div>
  );
};

export default Banner;
