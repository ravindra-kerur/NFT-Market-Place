"use client";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

import Style from "./NFTCard.module.css";
import images from "./../../img";

function NFTCard() {
  const featureArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
  ];

  const [like, setLike] = useState(true);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.NFTCard}>
      {featureArray &&
        featureArray.map((el, i) => (
          <div className={Style.NFTCard_box} key={i + 1}>
            <div className={Style.NFTCard_box_img}>
              <Image
                src={el}
                alt="NFT Image"
                width={600}
                height={600}
                className={Style.NFTCard_box_img_img}
              />
            </div>

            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={() => likeNFT()}
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  )}
                  {""} 22
                </div>
              </div>

              <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}>
                  <small>Remaining Time:</small>
                  <p>3h : 15m : 20s</p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>Clone #12654</h4>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={Style.NFTCard_box_update_details_price_box_bid}
                    >
                      <small>Current Bid</small>
                      <p>1.000ETH</p>
                    </div>
                    {/* <div
                      className={
                        Style.NFTCard_box_update_details_price_box_stock
                      }
                    >
                      <small>61 in stock</small>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className={Style.NFTCard_box_update_details_category}>
                <BsImages />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default NFTCard;
