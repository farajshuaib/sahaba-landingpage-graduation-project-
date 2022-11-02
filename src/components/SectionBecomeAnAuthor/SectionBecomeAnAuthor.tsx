import React, { FC } from "react";
import NcImage from "../../shared/NcImage/NcImage";
import rightImgDemo from "../../assets/images/rightLargeImg.png";
import rightLargeImgDark from "../../assets/images/rightLargeImgDark.png";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import Logo from "../../shared/Logo/Logo";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";

export interface SectionBecomeAnAuthorProps {
  className?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-42" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
          A creative agency that lead and inspire.
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          Sahabafts is the NFT marketplace built on Ethereum focusing highly on
          user experience and ease of use to create, buy, sell and trade NFTs.
        </span>
        <div className="flex mt-6 space-x-2 sm:space-x-5 sm:mt-12">
          <ButtonPrimary href="/create-nft">Create item</ButtonPrimary>
          <ButtonSecondary href="/search">Discover more</ButtonSecondary>
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
