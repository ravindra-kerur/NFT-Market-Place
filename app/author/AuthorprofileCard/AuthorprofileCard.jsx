import React, { useState } from "react";
import Image from "next/image";
import {
  MdCloudUpload,
  MdFileCopy,
  MdOutlineReportProblem,
  MdVerified,
} from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

import Style from "./AuthorprofileCard.module.css";
import images from "./../../img";
import { Button } from "../../components/componentindex";

function AuthorprofileCard() {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };

  return (
    <div className={Style.AuthorprofileCard}>
      <div className={Style.AuthorprofileCard_box}>
        <div className={Style.AuthorprofileCard_box_img}>
          <Image
            alt="NFT"
            width={220}
            height={220}
            src={images.nft_1}
            className={Style.AuthorprofileCard_box_img_img}
          />
        </div>

        <div className={Style.AuthorprofileCard_box_info}>
          <h2>
            Smrit Patil {""}
            <span>
              <MdVerified />
            </span>
            {""}
          </h2>

          <div className={Style.AuthorprofileCard_box_info_address}>
            <input type="text" value="0x78787GG767B87BD6767" id="myInput" />
            <MdFileCopy
              className={Style.AuthorprofileCard_box_info_address_icon}
              onClick={() => copyAddress()}
            />
          </div>

          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue. Subscribe to unlock new features and if eligible,
            receive a share of ads revenue.
          </p>

          <div className={Style.AuthorprofileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.AuthorprofileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorprofileCard_box_share_icon}
          />

          {share && (
            <div className={Style.AuthorprofileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                {""} Facebook
              </p>

              <p>
                <span>
                  <TiSocialInstagram />
                </span>{" "}
                {""} Instagram
              </p>

              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                {""} Linkedin
              </p>

              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                {""} Youtube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorprofileCard_box_share_icon}
          />

          {report && (
            <div className={Style.AuthorprofileCard_box_share_report}>
              <p>
                <span>
                  <MdOutlineReportProblem />
                </span>{" "}
                {""}
                Report abouse
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthorprofileCard;
