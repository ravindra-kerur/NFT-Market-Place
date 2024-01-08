import React from "react";

import { NFTDescription, NFTDetailsImage, NFTTabs } from "./nftDetailsIndex";
import { Button, Category, Brand } from "../components/componentindex";
import Style from "./nftDetails.module.css";

function NFTDetails() {
  return (
    <div className={Style.NFTDetails}>
      <div className={Style.NFTDetails_box}>
        <NFTDetailsImage />
        <NFTDescription />
      </div>
      <Category />
      <Brand />
    </div>
  );
}

export default NFTDetails;
