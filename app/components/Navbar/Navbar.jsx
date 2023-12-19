"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdNotificationsActive } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "../Navbar/Navbar.module.css";
import { Discover, HelpCenter, Profile, Notification, Sidebar } from "./index";
import { Button } from "../componentindex";
import images from "../../img";

function Navbar() {
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [opensideMenu, setOpensideMenu] = useState(false);

  useEffect(() => {}, []);

  const openManu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelpCenter(false);
      setProfile(false);
      setNotification(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelpCenter(true);
      setProfile(false);
      setNotification(false);
    } else {
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
      setNotification(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
      setNotification(true);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setDiscover(false);
      setHelpCenter(false);
      setProfile(true);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!opensideMenu) {
      setOpensideMenu(true);
    } else {
      setOpensideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT Market Place"
              width={100}
              height={100}
            ></Image>
          </div>

          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* END OF LEFT SECTION  */}

        <div className={Style.navbar_container_right}>
          {/* Discover Menu */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openManu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* Help Menu */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openManu(e)}>Help Center</p>
            {helpCenter && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotificationsActive
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* Create Button Section */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* User Profile Section */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>

          {/* Menu Button */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
          {/* END  */}
        </div>
      </div>

      {/* Sidebar Components  */}
      {opensideMenu && (
        <div className={Style.sideBar}>
          <Sidebar setOpensideMenu={setOpensideMenu} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
