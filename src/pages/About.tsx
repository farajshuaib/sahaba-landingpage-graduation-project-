import rightImg from "../assets/images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "../components/SectionFounder";
import SectionStatistic from "../components/SectionStatistic";
import SectionSubscribe2 from "../components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "../components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import SectionHero from "../components/SectionHero";
import SectionClientSay from "../components/SectionClientSay/SectionClientSay";
import HeaderLogged from "../components/Header/HeaderLogged";
import Footer from "../shared/Footer/Footer";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 space-y-16 lg:py-28 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />

        <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <SectionStatistic />

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
