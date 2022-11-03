import React, { FC } from "react";
import NcImage from "../../shared/NcImage/NcImage";
import rightImgDemo from "../../assets/images/rightLargeImg.png";
import rightLargeImgDark from "../../assets/images/rightLargeImgDark.png";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import Logo from "../../shared/Logo/Logo";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import { APP_URL } from "../../constant";
import { useTranslation } from "react-i18next";

export interface SectionBecomeAnAuthorProps {
  className?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-42" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
          {t("SectionBecomeAnAuthor.title")}
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          {t("SectionBecomeAnAuthor.desc")}
        </span>
        <div className="flex gap-5 mt-6 space-x-2 sm:space-x-5 sm:mt-12">
          <ButtonPrimary
            onClick={() => {
              window.open(APP_URL + "create-nft", "_blank");
            }}
          >
            {t("Create_item")}
          </ButtonPrimary>
          <ButtonSecondary
            onClick={() => {
              window.open(APP_URL + "search", "_blank");
            }}
          >
            {t("Discover_more")}
          </ButtonSecondary>
        </div>
      </div>
      <div className="flex-grow">
        <NcImage containerClassName="block dark:hidden" src={rightImgDemo} />
        <NcImage
          containerClassName="hidden dark:block"
          src={rightLargeImgDark}
        />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
