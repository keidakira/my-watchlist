import React from "react";
import "./Navbar.css";

import searchSvg from "../images/search.svg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__poster">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="navbar__profile">
        <Link to="/search">
          <img className="profile__search" src={searchSvg} />
        </Link>
        <img
          className="profile__icon"
          src="https://occ-0-2433-2430.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS7y6M8hmMkDll4f1ikTU80bIXyygZncIeHT9CkoxSbVBcjYtBALq004ZpLiftf7BjKjosJHUC13sa3Ca3t5p5x2gp5P.png?r=fdd"
        />
      </div>
    </nav>
  );
}

export default Navbar;
