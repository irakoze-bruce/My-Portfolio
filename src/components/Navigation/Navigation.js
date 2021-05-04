/** @format */

import React from "react";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import style from "./Navigation.module.css";

function Navigation(props) {
  return (
    <div className={style.Navigation}>
      <Logo />
      <NavBar />
    </div>
  );
}

export default Navigation;
