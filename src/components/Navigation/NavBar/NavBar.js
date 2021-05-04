/** @format */

import React from "react";
import style from "./NavBar.module.css";
import NavbarItem from "./NavbarItem/NavbarItem";

function NavBar(props) {
  return (
    <ul className={style.NavBar}>
      <NavbarItem link='/' active>
        Home
      </NavbarItem>
      <NavbarItem link='/about'>about</NavbarItem>
      <NavbarItem link='/'>projects</NavbarItem>
      <NavbarItem link='/'>contact</NavbarItem>
    </ul>
  );
}

export default NavBar;
