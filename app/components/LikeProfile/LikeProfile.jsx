import React from "react";
import Image from "next/image";

import Style from "./LikeProfile.module.css";
import images from "../../img";

function LikeProfile() {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          <Image
            src={el}
            alt="user"
            width={15}
            height={15}
            className={Style.like_box_img}
          />
        </div>
      ))}
    </div>
  );
}

export default LikeProfile;
