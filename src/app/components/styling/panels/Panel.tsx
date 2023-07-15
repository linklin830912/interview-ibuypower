import React from "react";
import style from "./styles/panelStyle.module.css";

type panelProps = {
  children: JSX.Element;
};
function Panel(props: panelProps) {
  return <div className={style.container_div}>{props.children}</div>;
}

export default Panel;
