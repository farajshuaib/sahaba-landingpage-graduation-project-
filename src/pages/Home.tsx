import React from "react";
import SectionHowItWork from "../components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "../components/BgGlassmorphism/BgGlassmorphism";
import SectionBecomeAnAuthor from "../components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSubscribe2 from "../components/SectionSubscribe2/SectionSubscribe2";
import SectionVideos from "../components/SectionVideos";
import Heading from "../shared/Heading/Heading";
import ourFeatures from "../assets/images/our-features.png";
import whySahaba from "../assets/images/whySahaba.webp";
import SectionHero2 from "../components/SectionHero/SectionHero2";
import SectionStatistic from "../components/SectionStatistic";

function Home() {
  return (
    <div className="text-base bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <div className="relative overflow-hidden nc-PageHome">
        {/* GLASSMOPHIN */}
        <BgGlassmorphism />

        <div className="container relative my-12 space-y-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-16">
          {/* SECTION HERO */}
          <SectionHero2 />

          {/* SECTION 2 */}
          <SectionHowItWork />
        </div>

        <div className="container relative my-24 space-y-24 lg:space-y-32 lg:my-32">
          <div className="grid items-center grid-cols-12 gap-16 my-12">
            <img
              src={ourFeatures}
              alt=""
              loading="lazy"
              className="object-cover col-span-4"
            />
            <h6 className="col-span-8 text-2xl font-medium leading-relaxed tracking-wide text-gray-500 dark:text-gray-400">
              Sahaba is a regional / niche NFT marketplace, our goal is to bring
              forward artists and creators from Libya and MENA to become a
              leading community in the Web3 space while providing them with the
              necessary knowledge-base and the platform to launch their work.
              Sahabanft is also open for all creators from anywhere in the
              world, anyone and everyone are welcome to join.
            </h6>
          </div>

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

          <SectionStatistic />

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
