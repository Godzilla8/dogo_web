import React, { useState } from "react";
import logo from "../assets/suit-dogo.png";
import { NavLink } from "react-router-dom";
import { BiMenu, BiSolidWallet, BiX } from "react-icons/bi";
import NavLinks from "./NavLinks";
import toast from "react-hot-toast";

const Navbar = () => {
  const [toggleState, setToggleState] = useState(false);
  const [isCLicked, setIsClicked] = useState(false);

  const toggleNotification = () => {
    if (isCLicked) return;
    toast.success("Connect wallet coming soon...");
    setIsClicked(true);
  };

  const navProps = {
    setToggleState,
    toggleState,
  };
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <NavLink className="logo-link" to="/">
            <img src={logo} alt="logo" />
            <span>
              <span>DO</span>GO
            </span>
          </NavLink>
        </div>
        <NavLinks navClass={"navlist"} />
        <div className="mob-items">
          <div onClick={toggleNotification} className="nav-wallet">
            <BiSolidWallet />
            <span className="wallet-alert"></span>
          </div>
          <div onClick={() => setToggleState(!toggleState)} className="hamburger-menu">
            {toggleState ? <BiX /> : <BiMenu />}
          </div>
        </div>
      </div>
      <NavLinks {...navProps} navClass={"mobile-menu"} />
    </div>
  );
};

export default Navbar;
