import React from "react";

import Style from "./uploadNFT.module.css";
import { Dropzone, UploadNFTs } from "./components/uploadIndex";

function UploadNFT() {
  return (
    <div>
      <div className={Style.uploadNFT}>
        <div className={Style.uploadNFT_box}>
          <div className={Style.uploadNFT_box_heading}>
            <h1>Create New NFT</h1>
            <p>
              You can set preferred display name, create your profile URL and
              manage other personal settings.
            </p>
          </div>

          <div className={Style.uploadNFT_box_title}>
            <h2>Image, Audio, Video, or 3D Model</h2>
            <p>
              File type supported: JPG, PNG, GIF, SVG, MP4, WEBM, GBL. Max size:
              100 MB
            </p>
          </div>

          <div className={Style.uploadNFT_box_form}>
            <UploadNFTs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadNFT;
