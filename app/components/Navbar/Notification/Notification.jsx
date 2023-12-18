import React from "react";
import Image from "next/image";

import Style from "./Notification.module.css";
import images from "../../../img";

function Notification() {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="Profile image"
            width={50}
            height={50}
          />
        </div>

        <div className={Style.notification_box_info}>
          <h4>Smriti Patil</h4>
          <p>Measure action your user ...</p>
          <small>2 minutes age</small>
        </div>

        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
}

export default Notification;
