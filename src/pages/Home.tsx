import React from "react";
import SectionHowItWork from "../components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "../components/BgGlassmorphism/BgGlassmorphism";
import SectionBecomeAnAuthor from "../components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionHero from "../components/SectionHero/SectionHero";
import Vector1 from "../assets/images/Vector1.png";
import SectionSubscribe2 from "../components/SectionSubscribe2/SectionSubscribe2";
import SectionVideos from "../components/SectionVideos";
import HeaderLogged from "../components/Header/HeaderLogged";
import Footer from "../shared/Footer/Footer";


function Home() {
  return (
    <div className="text-base bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <HeaderLogged />
      <div className="relative overflow-hidden nc-PageHome">
        {/* GLASSMOPHIN */}
        <BgGlassmorphism />

        <div className="container relative mt-12 mb-20 space-y-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
          {/* SECTION HERO */}
          <SectionHero
            className="pb-10"
            heading={
              <span>
                Discover 🖼
                <br /> collect, and sell <br /> extraordinary {` `}
                <span className="relative pr-3">
                  <img
                    className="absolute w-full bottom-3 -left-1"
                    src={Vector1}
                    alt="Vector1"
                  />
                  <span className="relative">NFTs</span>
                </span>
              </span>
            }
          />

          {/* SECTION 2 */}
          <SectionHowItWork />
        </div>

     

        <div className="container relative my-24 space-y-24 lg:space-y-32 lg:my-32">
          {/* SECTION */}
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
      <Footer />
    </div>
  );
}

export default Home;
