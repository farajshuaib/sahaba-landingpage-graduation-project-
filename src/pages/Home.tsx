import React from "react";
import SectionHowItWork from "../components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "../components/BgGlassmorphism/BgGlassmorphism";
import SectionBecomeAnAuthor from "../components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSubscribe2 from "../components/SectionSubscribe2/SectionSubscribe2";
import SectionVideos from "../components/SectionVideos";
import HeaderLogged from "../components/Header/HeaderLogged";
import Footer from "../shared/Footer/Footer";
import SectionHero3 from "../components/SectionHero/SectionHero3";
import Heading from "../shared/Heading/Heading";
import heroRight1 from "../assets/images/hero-right1.png";
import whySahaba from "../assets/images/whySahaba.webp";

function Home() {
  return (
    <div className="text-base bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <div className="relative overflow-hidden nc-PageHome">
        {/* GLASSMOPHIN */}
        <BgGlassmorphism />

        <div className="container relative my-12 space-y-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-16">
          {/* SECTION HERO */}
          <SectionHero3 />

          <div className="my-12">
            <BgGlassmorphism />
            <Heading
              isCenter={true}
              desc="Sahabafts is the NFT marketplace built on Ethereum and Polygon focusing highly on user experience and ease of use to create, buy, sell and trade NFTs.
"
            >
              On the mission to bring NFTs to the mainstream
            </Heading>
            <div className="relative ">
              <img
                className="object-cover w-3/4 h-full mx-auto"
                src={heroRight1}
                alt="hero"
              />
            </div>
          </div>

          {/* SECTION 2 */}
          <SectionHowItWork />
        </div>

        <div className="container relative my-24 space-y-24 lg:space-y-32 lg:my-32">
          {/* SECTION */}
          <div className="my-12">
            <BgGlassmorphism />
            <Heading
              isCenter={true}
              desc="Easy user experience, low fees, one-click minting, AirNFTs was built for artists by artists              "
            >
              Why SahabaNFTs?
            </Heading>
            <div className="relative ">
              <img
                className="object-cover w-3/4 mx-auto rounded-xl"
                src={whySahaba}
                alt="hero"
              />
            </div>
          </div>

          <div className="relative py-20 lg:py-24">
            <BackgroundSection />
            <SectionBecomeAnAuthor />
          </div>

          {/* SECTION */}
          <SectionSubscribe2 />

          {/* SECTION */}
          <SectionVideos />
        </div>
      </div>
    </div>
  );
}

export default Home;
