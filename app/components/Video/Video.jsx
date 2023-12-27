import React from "react";
import Image from "next/image";

import Style from "./Video.module.css";
import images from "../../img";

function Video() {
  return (
    <div className={Style.video}>
      <div className={Style.video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>
          Checkout our videos. View more and share more new perspections on just
          about any topic. Everyone's welcome.
        </p>

        <div className={Style.video_box_frame}>
          <div className={Style.video_box_frame_left}>
            <Image
              src={images.creatorbackground6}
              alt="Video Image"
              width={1920}
              height={1080}
              className={Style.video_box_frame_left_img}
              objectFit="cover"
            />
          </div>

          <div className={Style.video_box_frame_right}>Hey</div>
        </div>
      </div>
    </div>
  );
}

export default Video;
