import React, { FC, useEffect } from "react";
import { useCrud } from "../hooks/useCrud";
import Heading from "./Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "10 million",
    subHeading:
      "Articles have been public around the world (as of Sept. 30, 2021)",
  },
  {
    id: "2",
    heading: "100,000",
    subHeading: "Registered users account (as of Sept. 30, 2021)",
  },
  {
    id: "3",
    heading: "220+",
    subHeading:
      "Countries and regions have our presence (as of Sept. 30, 2021)",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  const { fetch, loading, data }: any = useCrud("/general-statistics");

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <></>;
  }

  console.log(data);

  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        🚀 Fast Facts
      </Heading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {[
          {
            id: "1",
            heading: data.collections,
            subHeading:
              "Collections have been public around the world ",
          },
          {
            id: "2",
            heading: data.users,
            subHeading: "Registered users account ",
          },
          {
            id: "3",
            heading: data.nfts,
            subHeading:
              "NFTs have been public around the world ",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block mt-3 text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
