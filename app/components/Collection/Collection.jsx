"use client";
import React, { useState } from "react";
import Style from "./Collection.module.css";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import DaysComponent from "./DaysComponents/DaysComponents";

function Collection() {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5, 6];

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollowers = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollowers()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.collection_box}>
          {CardArray &&
            CardArray.length &&
            CardArray.map((el, i) => <DaysComponent key={i + 1} />)}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {followingArray &&
            followingArray.length &&
            followingArray.map((el, i) => <DaysComponent key={i + 1} />)}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {newsArray &&
            newsArray.length &&
            newsArray.map((el, i) => <DaysComponent key={i + 1} />)}
        </div>
      )}
    </div>
  );
}

export default Collection;
