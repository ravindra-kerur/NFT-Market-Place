"use client";
import React, { useState } from "react";

import { MdOutlineAttachFile, MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaPercent } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

import Style from "./UploadNFTs.module.css";
import formStyle from "../../../account/components/Form/Form.module.css";
import images from "../../../img";
import { Button } from "../../../components/componentindex";
import { Dropzone } from "../uploadIndex";

function UploadNFTs() {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [properties, setProperties] = useState("");
  const [category, setCategory] = useState(0);

  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photography",
    },
  ];

  return (
    <div className={Style.upload}>
      <Dropzone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image={images.nft_1}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            name="nft"
            placeholder="Smriti Patil"
            className={formStyle.Form_box_input_username}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              name="website"
              placeholder="Website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <p className={Style.upload_box_input_para}>
            The problem is, on AWS lambda this is where the backend I am
            integrating with is backend, when I send a transaction first, it
            work. But when I want to send the second transaction, it gives the
            error "nonce too low"
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            cols="30"
            rows="6"
            name="description"
            id=""
            placeholder="Something about yourself in few words"
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>
            The description will be included on the items detail page undernath
            its image. Markdown syntax is supported.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={Style.upload_box_input_para}>
            Choose an exiting collection or create a new one
          </p>

          <div className={Style.upload_box_slider_div}>
            {categoryArray &&
              categoryArray.map((el, i) => (
                <div
                  key={i + 1}
                  className={`${Style.upload_box_slider} ${
                    active == i + 1 ? Style.active : ""
                  }`}
                  onClick={() => (setActive(i + 1), setCategory(el.category))}
                >
                  <div className={Style.upload_box_slider_box}>
                    <div className={Style.upload_box_slider_box_img}>
                      <Image
                        src={el.image}
                        alt="Background Image"
                        width={70}
                        height={70}
                        className={Style.upload_box_slider_box_img_img}
                      />
                    </div>
                    <div className={Style.upload_box_slider_box_img_icon}>
                      <TiTick />
                    </div>
                  </div>

                  <p>Crypto Legend - {el.category}</p>
                </div>
              ))}
          </div>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="royalties">Royalties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                name="royalties"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                name="size"
                placeholder="165MB"
                onClick={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="properties">Properties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                name="properties"
                placeholder="Properties"
                onClick={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName="Upload"
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          />

          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
}

export default UploadNFTs;
