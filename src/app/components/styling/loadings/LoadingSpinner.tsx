import React from "react";
import style from "./styles/loadingSpinnerStyle.module.css";

function LoadingSpinner() {
  return (
    <div className={style.container_div}>
      <span className={style.spinner_span}></span>
    </div>
  );
}

export default LoadingSpinner;
