import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HomeSvg from "../Svg/HomeSvg";
import BuySvg from "../Svg/BuySvg";
import DealSvg from "../Svg/DealSvg";
import WalletSvg from "../Svg/WalletSvg";
import MoreSvg from "../Svg/MoreSvg";

const Navlinks = ({ activeNav }) => {
  const [active, setActive] = useState("buy");

  useEffect(() => {
    setActive(activeNav);
  }, [activeNav]);

  return (
    <ul className="menu-items">
      <li className={`menu-item ${active === "home" && "active"}`}>
        <Link
          className={`menu-item-link ${active === "home" && "active"}`}
          to="/"
        >
          <HomeSvg
            className="menu-icon"
            fill={`${active === "home" ? "#227EFF" : "none"}`}
          />
          <p>Home</p>
        </Link>
      </li>
      <li className={`menu-item ${active === "buy" && "active"}`}>
        <Link
          className={`menu-item-link ${active === "buy" && "active"}`}
          to="/buy"
        >
          <BuySvg
            className="menu-icon"
            fill={`${active === "buy" ? "#227EFF" : "none"}`}
          />
          <p>Buy</p>
        </Link>
      </li>
      <li className={`menu-item ${active === "deals" && "active"}`}>
        <Link
          className={`menu-item-link ${active === "deals" && "active"}`}
          to="/deals"
        >
          <DealSvg
            className="menu-icon"
            fill={`${active === "deals" ? "#227EFF" : "none"}`}
          />
          <p>Deals</p>
        </Link>
      </li>
      <li className={`menu-item ${active === "wallet" && "active"}`}>
        <Link
          className={`menu-item-link ${active === "wallet" && "active"}`}
          to="/wallet"
        >
          <WalletSvg
            className="menu-icon"
            fill={`${active === "wallet" ? "#227EFF" : "none"}`}
          />
          <p> Wallet</p>
        </Link>
      </li>
      <li className={`menu-item ${active === "more" && "active"}`}>
        <Link
          className={`menu-item-link more ${active === "more" && "active"}`}
          to="/more"
        >
          <MoreSvg
            className="menu-icon"
            fill={`${active === "more" ? "#227EFF" : "#718596"}`}
          />
          <p>More</p>
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
