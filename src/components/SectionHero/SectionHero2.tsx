import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import imagePng from "../../assets/images/hero-right-3.png";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col items-start flex-shrink-0 space-y-8 lg:w-1/2 sm:space-y-10 pb-14 lg:pb-36 xl:pb-60 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
            {t("Discover_collect_and_sell_NFTs")} 🖼
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            {t("hero_section_description1")} <br />{" "}
            {t("hero_section_description2")}
          </span>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
