import React from "react";

import Navlinks from "./Navlinks";
import "./Navbar.css";
import Navbuttons from "./Navbuttons";

const Navbar = ({ activeNav, activeNavBtn, onClick }) => {
  return (
    <nav className="navbar-container">
      {activeNav && <Navlinks activeNav={activeNav} />}
      {activeNavBtn && <Navbuttons onClick={onClick} />}
    </nav>
  );
};

export default Navbar;
