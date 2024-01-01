import React from "react";
import Image from "next/image";

import Style from "./Banner.module.css";

function Banner({ bannerImage }) {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="Background"
          width={1600}
          height={30}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="Background"
          width={1600}
          height={900}
        />
      </div>
    </div>
  );
}

export default Banner;
