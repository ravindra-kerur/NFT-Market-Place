"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import Style from "./index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowersTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "./components/componentindex";

import { NFTMarketPlaceContext } from "./Context/NFTMarketPlaceContext";

export default function Home() {
  const { checkIfWalletIsConnected } = useContext(NFTMarketPlaceContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="ExploreDiscover the most outstanding NFTs in all topics of life"
      />
      <AudioLive />
      <FollowersTab />
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="ExploreDiscover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
}
