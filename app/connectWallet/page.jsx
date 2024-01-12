"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiLogoMeta } from "react-icons/bi";
import { SiWalletconnect } from "react-icons/si";
import { IoMdWallet } from "react-icons/io";
import { SiInformatica } from "react-icons/si";

import Style from "./ConnectWallet.module.css";
import images from "../img";

function ConnectWallet() {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: <BiLogoMeta />,
      name: "Metamask",
    },
    {
      provider: <SiWalletconnect />,
      name: "WalletConnect",
    },
    {
      provider: <IoMdWallet />,
      name: "WalletLink",
    },
    {
      provider: <SiInformatica />,
      name: "Formatic",
    },
  ];
  return (
    <div className={Style.ConnectWallet}>
      <div className={Style.ConnectWallet_box}>
        <h1>Connect your Wallet</h1>
        <p className={Style.ConnectWallet_box_para}>
          Connect with one of your available wallet provider or create new one
        </p>

        <div className={Style.ConnectWallet_box_provider}>
          {providerArray &&
            providerArray.map((el, i) => (
              <div
                key={i + 1}
                className={`${Style.ConnectWallet_box_provider_item} ${
                  activeBtn == i + 1 ? Style.active : ""
                }`}
                onClick={() => setActiveBtn(i + 1)}
              >
                <div className={Style.ConnectWallet_box_provider_item_img}>
                  {el.provider}
                </div>
                <p>{el.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
