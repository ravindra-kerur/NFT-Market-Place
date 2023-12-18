import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

import Style from "./Profile.module.css";
import images from "../../../img";

function Profile() {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>Smriti Patil</p>
          <small>X8988980566...</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/myprofile" }} legacyBehavior>
                My Profile
              </Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/my-items" }} legacyBehavior>
                My Item
              </Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/edit-profile" }} legacyBehavior>
                Edit Profile
              </Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }} legacyBehavior>
                Help
              </Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/disconnect" }} legacyBehavior>
                Disconnect
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
