import Logo from "../../shared/Logo/Logo";
import SocialsList1 from "../../shared/SocialsList1/SocialsList1";
import { CustomLink } from "../../data/types";
import React from "react";
import LocalesDropDown from "../../components/Header/LocalesDropDown";
import { useTranslation } from "react-i18next";
import { APP_URL } from "../../constant";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}


const Footer: React.FC = () => {
  const { t } = useTranslation();

  const widgetMenus: WidgetFooterMenu[] = [
    {
      id: "5",
      title: t("Getting_started"),
      menus: [
        { href: APP_URL + "search", label: "NFTs" },
        { href: APP_URL + "collections", label: t("Collections") },
        { href: "/", label: t("Website") },
      ],
    },
    {
      id: "1",
      title: t("INFORMATION"),
      menus: [
        {
          href: "/terms-of-service",
          label: t("Term_of_services"),
        },
        {
          href: "/privacy-policy",
          label: t("Privacy_policy"),
        },
        { href: APP_URL + "/kyc-form", label: t("Get_verified") },
      ],
    },
  ];
  
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="text-lg font-semibold uppercase text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="relative py-12 border-t nc-Footer lg:py-20 border-neutral-200 dark:border-neutral-700">
      <div className="container grid justify-center grid-cols-1 text-center md:text-justify gap-y-16 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:gap-x-10 ">
        <div className="lg:flex lg:flex-col">
          <div className="">
            <Logo />
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <SocialsList1 className="flex items-center lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div>

        {widgetMenus.map(renderWidgetMenuItem)}

        <div className="text-sm">
          <h2 className="text-lg font-semibold uppercase text-neutral-700 dark:text-neutral-200">
            {t("Languages")}
          </h2>
          <div className="mt-5 space-y-4">
            <LocalesDropDown labeled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
