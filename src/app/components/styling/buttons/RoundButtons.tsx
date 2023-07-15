import React from "react";
import style from "./styles/roundButtonStyle.module.css";
type roundButtonProps = {
  label: string;
};
function RoundButton(props: roundButtonProps) {
  return <button className={style.container_button}>{props.label}</button>;
}

export default RoundButton;
