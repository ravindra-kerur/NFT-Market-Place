"use client";
import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

import Style from "./contactUs.module.css";
import formStyle from "../account/components/Form/Form.module.css";
import { Button } from "../components/componentindex";

function ContactUs() {
  return (
    <div className={Style.ContactUs}>
      <div className={Style.ContactUs_box}>
        <h1>Contact</h1>
        <div className={Style.ContactUs_box_box}>
          <div className={Style.ContactUs_box_box_left}>
            <div className={Style.ContactUs_box_box_left_item}>
              <h3>ADDRESS</h3>
              <p>
                Photo booth tattooed prism, portland taiyaki hoodie typewrite
              </p>
            </div>

            <div className={Style.ContactUs_box_box_left_item}>
              <h3>EMAIL</h3>
              <p>ravindra.spatil@gmail.com</p>
            </div>

            <div className={Style.ContactUs_box_box_left_item}>
              <h3>PHONE</h3>
              <p>9008093481</p>
            </div>

            <div className={Style.ContactUs_box_box_left_item}>
              <h3>SOCIAL</h3>
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
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.ContactUs_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Smriti Patil"
                  className={formStyle.Form_box_input_username}
                />
              </div>

              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="email" name="email" placeholder="Email *" />
                </div>
              </div>

              <div className={formStyle.Form_box_input}>
                <label htmlFor="message">Message</label>
                <textarea
                  cols="30"
                  rows="6"
                  name="message"
                  id=""
                  placeholder="Something about yourself in few words"
                />
              </div>

              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
