import React from "react";
import logo from "../assets/suit-dogo.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink className="logo-link" to="/">
        <img src={logo} alt="logo" />
        <span>
          <span>DO</span>GO
        </span>
      </NavLink>
    </div>
  );
};

export default Logo;
