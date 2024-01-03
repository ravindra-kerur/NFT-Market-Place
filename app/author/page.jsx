"use client";
import React, { useState } from "react";

import Style from "./author.module.css";
import { Banner, NFTCardTwo } from "../collection/components/collectionIndex";
import { Brand, Title } from "../components/componentindex";
import images from "../img/index";
import {
  AuthorprofileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "./componentsIndex";
import FollowerTabCard from "../components/FollowersTab/FollowerTabCard/FollowerTabCard";

function Author() {
  const bannerImages = images.creatorbackground2;

  const popularArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.Author}>
      <Banner bannerImage={bannerImages} />
      <AuthorprofileCard
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NFT music or audio"
      />

      <div className={Style.Author_box}>
        {popularArray &&
          popularArray.length &&
          popularArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
      </div>

      <Brand />
    </div>
  );
}

export default Author;
