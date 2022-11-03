import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading desc={t("statistics_desc")}>🚀 {t("Fast_Facts")}</Heading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {[
          {
            id: "1",
            heading: data.collections,
            subHeading: t("collections_count"),
          },
          {
            id: "2",
            heading: data.users,
            subHeading: t("users_count"),
          },
          {
            id: "3",
            heading: data.nfts,
            subHeading: t("items_count"),
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
