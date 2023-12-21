import React from "react";

import Style from "./Button.module.css";

function Button({ btnName, handleClick }) {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick()}>
        {btnName}
      </button>
    </div>
  );
}

export default Button;