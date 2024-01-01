import React from "react";

import Style from "./collection.module.css";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "./components/collectionIndex";
import images from "../img";
import { Slider, Brand } from "../components/componentindex";
import Filter from "../components/Filter/Filter";

function Collection() {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
}

export default Collection;
