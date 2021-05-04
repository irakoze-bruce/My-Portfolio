/** @format */

import React from "react";
import style from "./NavbarItem.module.css";

function NavBar(props) {
  return (
    <li className={style.NavbarItem}>
      <a href={props.link} className={props.active ? style.active : null}>
        {props.children}
      </a>
    </li>
  );
}

export default NavBar;
