import React from "react";
import style from "./styles/nextButtonStyle.module.css";
type nextButtonProps = {
  isFlip?: boolean;
};
function NextButton(props: nextButtonProps) {
  return (
    <button className={style.container_button}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <polyline
            className={style.svg_polyline}
            points={
              props.isFlip
                ? "16.92,33.6 28.08,22.4 16.92,11.4"
                : "28.08,11.4 16.92,22.6 28.08,33.6"
            }
            fill="transparent"
            strokeLinecap="round"
            stroke="#000000"
            strokeWidth={"3px"}
          />
        </svg>
      </div>
    </button>
  );
}

export default NextButton;
