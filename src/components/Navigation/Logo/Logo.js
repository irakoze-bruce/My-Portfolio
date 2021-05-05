/** @format */

import React from "react";
import Aux from "../../../hoc/Aux";
import logoImage from "../../../Assets/images/a.jpg";
import style from "./Logo.module.css";

function Logo(props) {
  return (
    <Aux>
      <div className={style.Logo}>
        <a href='/'>
          <img src={logoImage} alt='Bruce ' />
        </a>
      </div>
    </Aux>
  );
}

export default Logo;
