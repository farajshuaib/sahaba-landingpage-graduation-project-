import React, { FC } from "react";
import NcImage from "../../shared/NcImage/NcImage";
import HIW1img from "../../assets/images/HIW1img.png";
import HIW2img from "../../assets/images/HIW2img.png";
import HIW3img from "../../assets/images/HIW3img.png";
import HIW4img from "../../assets/images/HIW4img.png";
import VectorImg from "../../assets/images/VectorHIW.svg";
import Badge from "../../shared/Badge/Badge";
import { useTranslation } from "react-i18next";

export interface SectionHowItWorkProps {
  className?: string;
}

const SectionHowItWork: FC<SectionHowItWorkProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      img: HIW1img,
      imgDark: HIW1img,
      title: t("SectionHowItWork.1.title"),
      // desc: t("SectionHowItWork.1.description"),
    },
    {
      id: 2,
      img: HIW2img,
      imgDark: HIW2img,
      title: t("SectionHowItWork.2.title"),
      // desc: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
    },
    {
      id: 3,
      img: HIW3img,
      imgDark: HIW3img,
      title: t("SectionHowItWork.3.title"),
      // desc: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
    },
    {
      id: 4,
      img: HIW4img,
      imgDark: HIW4img,
      title: t("SectionHowItWork.4.title"),
      desc: "" //"Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
    },
  ];
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 xl:gap-20">
        <img
          className="absolute inset-x-0 hidden md:block -top-1"
          src={VectorImg}
          alt="vector"
        />
        {data.map((item: typeof data[number], index: number) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <NcImage
              containerClassName="mb-5 sm:mb-10 lg:mb-20 max-w-[200px] mx-auto"
              src={item.img}
            />
            <div className="mt-auto space-y-5 text-center">
              <Badge
                name={`Step ${index + 1}`}
                color={
                  !index
                    ? "blue"
                    : index === 1
                    ? "pink"
                    : index === 2
                    ? "yellow"
                    : "green"
                }
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item?.desc && <span className="block text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
