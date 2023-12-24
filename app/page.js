import Image from "next/image";

import Style from "./index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
} from "./components/componentindex";

export default function Home() {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="New Collection"
        paragraph="ExploreDiscover the most outstanding NFTs in all topics of life"
      />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="ExploreDiscover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <Subscribe />
    </div>
  );
}
