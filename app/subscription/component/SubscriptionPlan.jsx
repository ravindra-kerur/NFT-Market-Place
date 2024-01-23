import React from "react";
import { TiTick } from "react-icons/ti";

import Style from "./SubscriptionPlan.module.css";
import { Button } from "../../components/componentindex";

function SubscriptionPlan({ el, i }) {
  return (
    <div className={Style.SubscriptionBox}>
      <div className={Style.SubscriptionBox_box}>
        <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>
        <small className={Style.SubscriptionBox_box_small}>
          {el.popular || ""}
        </small>

        <p className={Style.SubscriptionBox_box_small_price}>{el.price}</p>

        <div className={Style.SubscriptionBox_box_info}>
          {el.service.map((el, i) => (
            <p key={i + 1} className={Style.SubscriptionBox_box_info_para}>
              <span>
                <TiTick />
              </span>
              {el}
            </p>
          ))}
        </div>

        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle={Style.button}
        />

        {/* end  */}
      </div>
    </div>
  );
}

export default SubscriptionPlan;
