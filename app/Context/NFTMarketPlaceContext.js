"use client";
import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import Router from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

// Internal imports
import { NFTMarketPlaceAddress, NFTMarketPlaceABI } from "./constants";

// Fetching Smart Contract
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketPlaceAddress,
    NFTMarketPlaceABI,
    signerOrProvider
  );

// Connecting with Smart Contract
const ConnectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong with smart contrct");
  }
};

export const NFTMarketPlaceContext = React.createContext();

export const NFTMarketPlaceProvider = ({ children }) => {
  const titleData = "Discover, collect and sell NFTs";
  const [currentAccount, setCurrentAccount] = useState("");

  //   const checkContract = async () => {
  //     const contract = await ConnectingWithSmartContract();
  //     console.log(contract);
  //   };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  // Check if wallet is connected
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("Connected Account:- ", accounts[0]);
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.log("Something went wrong while cnnecting");
    }
  };

  // Connect Wallet Function
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccount",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Upload to IPFS function
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NFTMarketPlaceContext.Provider
      value={{ titleData, connectWallet, uploadToIPFS }}
    >
      {children}
    </NFTMarketPlaceContext.Provider>
  );
};
