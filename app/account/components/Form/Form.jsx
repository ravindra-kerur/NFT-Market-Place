import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContentCopy, MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

import Style from "./Form.module.css";
import { Button } from "../../../components/componentindex";

function Form() {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Smriti Patil"
              className={Style.Form_box_input_username}
            />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="email" name="email" placeholder="Email *" />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              cols="30"
              rows="6"
              name="description"
              id=""
              placeholder="Something about yourself in few words"
            />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" name="website" placeholder="Website" />
            </div>
          </div>

          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="facebookLink">Facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input
                  type="text"
                  name="facebookLink"
                  placeholder="https://smriti"
                />
              </div>
            </div>

            <div className={Style.Form_box_input}>
              <label htmlFor="instagramLink">Instagram</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input
                  type="text"
                  name="instagramLink"
                  placeholder="https://instagram.smriti"
                />
              </div>
            </div>

            <div className={Style.Form_box_input}>
              <label htmlFor="twitterLink">Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input
                  type="text"
                  name="twitterLink"
                  placeholder="https://twitter.smriti"
                />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="walletAddrs">Wallet Address</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                name="walletAddrs"
                placeholder="0xGTTYU7787GFER37888E344"
              />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_btn}>
            <Button
              btnName="Upload Profile"
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>

          {/* end */}
        </form>
      </div>
    </div>
  );
}

export default Form;
