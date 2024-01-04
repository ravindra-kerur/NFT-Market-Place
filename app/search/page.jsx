import React from "react";

import Style from "./search.module.css";
import { Slider, Brand, Filter, Title } from "../components/componentindex";
import { SearchBar } from "./SearchBar/searchIndex";
import { NFTCardTwo, Banner } from "../collection/components/collectionIndex";
import images from "../img";

function page() {
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
    <div className={Style.Search}>
      <Banner bannerImage={images.creatorbackground8} />
      <SearchBar />
      <Filter />
      <Title heading="NFT Data" />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
}

export default page;
