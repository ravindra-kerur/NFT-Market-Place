"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import images from "../img";
import Form from "./components/Form/Form";
import Style from "./account.module.css";

function Account() {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: "5000000",
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile Settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user1}
            alt="account upload"
            width={250}
            height={250}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>

        <div className={Style.account_box_form}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Account;
