import React from "react";

import Style from "./AudioLive.module.css";
import AudioCart from "./AudioCart/AudioCart";
import AudioCartSmall from "./AudioCartSmall/AudioCartSmall";

function AudioLive() {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          <AudioCart />
          <AudioCart />
        </div>
        <div className={Style.audioLive_box_right}>
          <AudioCartSmall />
          <AudioCartSmall />
          <AudioCartSmall />
        </div>
      </div>
    </div>
  );
}

export default AudioLive;
