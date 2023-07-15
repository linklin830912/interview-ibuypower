import React from "react";
import style from "./styles/redLabelStyle.module.css";
type redLabelProps = {
  label: string;
};
function RedLabel(props: redLabelProps) {
  return <h6 className={style.container_div}>{props.label}</h6>;
}

export default RedLabel;
