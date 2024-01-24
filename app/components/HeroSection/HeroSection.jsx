"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import Style from "./HeroScrion.module.css";
import { Button } from "../componentindex";
import images from "../../img";

import { NFTMarketPlaceContext } from "../../Context/NFTMarketPlaceContext";

function HeroSection() {
  const { titleData } = useContext(NFTMarketPlaceContext);

  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData}</h1>
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
