import Image from "next/image";

import Style from "./index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
} from "./components/componentindex";

export default function Home() {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
    </div>
  );
}