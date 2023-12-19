"use client";
import React from "react";
import Image from "next/image";

import Style from "./HeroScrion.module.css";
import { Button } from "../componentindex";
import images from "../../img";

function HeroSection() {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs</h1>
          <p>
            Discover the most outstanding NFTs in all topics of life. Creative
            your NFTs and sell them
          </p>
          {/* <Button btnName="Start your search" /> */}
          <Button btnName="Start your search" handleClick={() => {}} />
        </div>

        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero Section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
