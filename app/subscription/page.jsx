"use client";
import React from "react";

import Style from "./subscription.module.css";
import SubscriptionPlan from "./component/subscriptionPlan";

function Subscription() {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated Reporting", "Faster Processing", "Customization"],
      info: "Literally you probably haven't heard of them jean shorts",
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popular: "",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Report",
        "Premium Support",
      ],
      info: "Literally you probably haven't heard of them jean shorts",
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popular: "",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Report",
        "Premium Support",
      ],
      info: "Literally you probably haven't heard of them jean shorts",
    },
  ];
  return (
    <div className={Style.Subscription}>
      <div className={Style.Subscription_box}>
        <div className={Style.Subscription_box_info}>
          <h1>Subscription</h1>
          <p>Pricing to fit the needs of any companies size.</p>
        </div>

        <div className={Style.Subscription_box_box}>
          {subscriptionArray &&
            subscriptionArray.map((el, i) => (
              <SubscriptionPlan key={i + 1} el={el} i={i} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
