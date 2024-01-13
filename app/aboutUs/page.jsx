import React from "react";
import Image from "next/image";

import Style from "./aboutUs.module.css";
import { Brand } from "../components/componentindex";
import images from "../img";

function AboutUs() {
  const founderArray = [
    {
      name: "James Anderson",
      position: "Co-founder and Chief Executive",
      image: images.jamesAnderson,
    },
    {
      name: "Rickey Pointing",
      position: "Co-founder and Chief Executive",
      image: images.rickeyPointing,
    },
    {
      name: "Ross Taylor",
      position: "Co-founder, Chairman",
      image: images.rossTaylor,
    },
    {
      name: "Brain Lara",
      position: "Co-founder, Chief Strategy Officer",
      image: images.brainLara,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Shoppers are also interested in a company's mission. They'll use the About Us page to determine if they share core values with the business.",
    },
    {
      title: "10,000",
      info: "If you offer a service, explain your business model or how your products are made. If you have a unique way of doing things.",
    },
    {
      title: "220+",
      info: "Feature photos of the founders or key people on your team. Customers like to see who they are buying from or working with.",
    },
  ];

  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>About Us</h1>
            <p>
              We are impartial and independent, and every day we create
              distinctive, world class programmes and content which inform,
              educate and entertain millions of people around the world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.aboutUs} alt="Hero" />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>Founder</h2>
          <p>
            We create distinctive, world class programmes and content which
            inform, educate and entertain millions of people around the world.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray &&
              founderArray.map((el, i) => (
                <div key={i + 1} className={Style.aboutus_box_founder_box_img}>
                  <Image
                    src={el.image}
                    alt={el.name}
                    width={500}
                    height={500}
                    className={Style.aboutus_box_founder_box_img_img}
                  />
                  <h3>{el.name}</h3>
                  <p>{el.position}</p>
                </div>
              ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>Fast Facts</h2>
          <p>
            We are impartial and independent, and every day we create
            distinctive, world class programmes.
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray &&
              factsArray.map((el, i) => (
                <div key={i + 1} className={Style.aboutus_box_facts_box_info}>
                  <h3>{el.title}</h3>
                  <p>{el.info}</p>
                </div>
              ))}
          </div>
        </div>

        {/* end  */}
      </div>
      <Brand />
    </div>
  );
}

export default AboutUs;
