import React from "react";
import Link from "next/link";

import Style from "./HelpCenter.module.css";

function HelpCenter() {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div key={i + 1} className={Style.helpCenter}>
          <Link href={{ pathname: `${el.link}` }} legacyBehavior>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HelpCenter;
