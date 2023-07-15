import React from "react";
import style from "./styles/roundLabelStyle.module.css";
type roundLabelProps = {
  label: string;
};
function RoundLabel(props: roundLabelProps) {
  return <h6 className={style.container_div}>{props.label}</h6>;
}

export default RoundLabel;
