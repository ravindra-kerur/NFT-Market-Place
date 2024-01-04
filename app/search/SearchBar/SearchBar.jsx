import React from "react";

import Style from "./SearchBar.module.css";
import { BsArrowRight, BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input type="text" placeholder="Type your Keyword..." />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
}

export default SearchBar;
