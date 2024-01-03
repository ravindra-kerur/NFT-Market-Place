import React from "react";

import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collection/components/collectionIndex";
import FollowerTabCard from "../../components/FollowersTab/FollowerTabCard/FollowerTabCard";

function AuthorNFTCardBox({
  collectiables,
  created,
  like,
  follower,
  following,
}) {
  const collectiablesArray = [
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

  const createdArray = [
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];

  const likeArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_2,
  ];

  const followersArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user7,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user8,
    },
    {
      background: images.creatorbackground7,
      user: images.user6,
    },
    {
      background: images.creatorbackground8,
      user: images.user2,
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground6,
      user: images.user8,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground2,
      user: images.user7,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },

    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
  ];

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followersArray.map((el, i) => (
            <FollowerTabCard key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AuthorNFTCardBox;
