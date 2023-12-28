import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

import Style from "./Category.module.css";
import images from "../../img";

function Category() {
  const categoryArray = [
    images.creatorbackground3,
    images.creatorbackground4,
    images.creatorbackground9,
    images.creatorbackground11,
    images.creatorbackground6,
    images.creatorbackground1,
  ];

  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {categoryArray &&
          categoryArray.map((el, i) => (
            <div className={Style.category_box} key={i + 1}>
              <Image
                src={el}
                alt="Background Image"
                className={Style.category_box_img}
                width={350}
                height={150}
                objectFit="cover"
              />

              <div className={Style.category_box_title}>
                <span>
                  <BsCircleFill />
                </span>

                <div className={Style.category_box_title_info}>
                  <h4>Entertainment</h4>
                  <small>1995 NFTs</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Category;
