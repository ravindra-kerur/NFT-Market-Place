import React from "react";
import Image from "next/image";

import Style from "./NFTTabs.module.css";

function NFTTabs({ dataTab, icon }) {
  return (
    <div className={Style.NFTTabs}>
      {dataTab &&
        dataTab.map((el, i) => (
          <div className={Style.NFTTabs_box} key={i + 1}>
            <Image
              src={el}
              alt="profile image"
              width={40}
              height={40}
              className={Style.NFTTabs_box_img}
            />
            <div className={Style.NFTTabs_box_info}>
              <div className={Style.NFTTabs_box_info_name_icon}>
                <span>
                  Offer by $720 by <span>Smriti Patil</span>
                </span>
                {icon}
              </div>
              <small>Jun 14 - 4:12 PM</small>
            </div>
          </div>
        ))}
    </div>
  );
}

export default NFTTabs;
