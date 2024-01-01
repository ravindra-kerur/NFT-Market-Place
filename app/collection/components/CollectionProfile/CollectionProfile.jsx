import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

import Style from "./CollectionProfile.module.css";
import images from "../../../img";

function CollectionProfile() {
  const cardArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={images.nft_image_1}
            alt="NFT image"
            width={800}
            height={800}
            className={Style.collectionProfile_box_left_img}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            This workflow will run tests using node and then publish a package
            to GitHub Packages when a release is created.
          </p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray &&
              cardArray.length &&
              cardArray.map((el, i) => (
                <div
                  className={Style.collectionProfile_box_middle_box_item}
                  key={i + 1}
                >
                  <small>Floor Price</small>
                  <p>${i + 1}95,6543</p>
                  <span>+ {i + 2}.11%</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionProfile;
