import React from "react";
import SectionHowItWork from "../components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "../components/BgGlassmorphism/BgGlassmorphism";
import SectionBecomeAnAuthor from "../components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSubscribe2 from "../components/SectionSubscribe2/SectionSubscribe2";
import Heading from "../shared/Heading/Heading";
import ourFeatures from "../assets/images/our-features.png";
import whySahaba from "../assets/images/hero-right-2.png";
import SectionHero2 from "../components/SectionHero/SectionHero2";
import SectionStatistic from "../components/SectionStatistic";
import { useTranslation } from "react-i18next";


function Home() {
  const { t } = useTranslation();
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
            <h6 className="col-span-8 text-xl font-medium leading-relaxed tracking-wide text-gray-500 dark:text-gray-100">
             {t('ourFeatures')}
            </h6>
          </div>

          {/* SECTION */}
          <div className="my-12">
            <BgGlassmorphism />
            <Heading
              isCenter
              desc={t('why_sahaba_desc')}
            >
             {t("why_sahaba")}
            </Heading>
            <div className="relative grid items-center grid-cols-12 gap-16">
              <p className="col-span-7 text-xl font-medium leading-relaxed tracking-wide text-gray-500 dark:text-gray-100">
                {t('why_sahaba_hero')}
              </p>
              <img
                className="object-cover col-span-5 mx-auto rounded-xl"
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
        </div>
      </div>
    </div>
  );
}

export default Home;
