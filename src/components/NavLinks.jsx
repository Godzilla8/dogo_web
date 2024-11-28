import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt, BiLeaf, BiSolidServer } from "react-icons/bi";
import { FaRoad } from "react-icons/fa";

const NavLinks = ({ toggleState, navClass, setToggleState }) => {
  return (
    <ul className={`${navClass} ${toggleState ? "show-menu" : "hide-menu"}`}>
      <NavLink onClick={() => toggleState && setToggleState(false)} to="/" className="navlink">
        <BiHomeAlt /> Home
      </NavLink>
      <NavLink
        onClick={() => toggleState && setToggleState(false)}
        to="/governance"
        className="navlink"
      >
        <BiLeaf /> Governance
      </NavLink>
      <NavLink
        onClick={() => toggleState && setToggleState(false)}
        to="/timeline"
        className="navlink"
      >
        <FaRoad /> Roadmap
      </NavLink>

      <NavLink
        onClick={() => toggleState && setToggleState(false)}
        to="/products"
        className="navlink"
      >
        <BiSolidServer /> Products
      </NavLink>
    </ul>
  );
};

export default NavLinks;
