/** @format */
import React from "react";
import style from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={style.Banner}>
      <h1>Hello, My name is Bruce IRAKOZE. </h1>
      <p>
        I'm a front-End web developer,I build interactive website with code:
        <strong> Javascript/React</strong>
      </p>
    </div>
  );
}

export default Banner;
