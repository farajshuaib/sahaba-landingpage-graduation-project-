import Logo from "../../shared/Logo/Logo";
import SocialsList1 from "../../shared/SocialsList1/SocialsList1";
import { CustomLink } from "../../data/types";
import React from "react";
import LocalesDropDown from "../../components/Header/LocalesDropDown";
import { useTranslation } from "react-i18next";

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
        { href: "/nfts", label: "NFTs" },
        { href: "/collections", label: t("Collections") },
        { href: "https://www.sahabanft.com", label: t("Website") },
      ],
    },
    {
      id: "1",
      title: t("INFORMATION"),
      menus: [
        {
          href: "https://www.sahabanft.com/term-of-services",
          label: t("Term_of_services"),
        },
        {
          href: "https://www.sahabanft.com/privacy-policy",
          label: t("Privacy_policy"),
        },
        { href: "/kyc-form", label: t("Get_verified") },
      ],
    },
  ];
  
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold uppercase text-neutral-700 dark:text-neutral-200">
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
    <div className="relative py-20 border-t nc-Footer lg:pt-32 lg:pb-28 border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10 ">
        <div className="grid grid-cols-4 col-span-2 gap-5 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="flex items-center col-span-2 md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div>

        {widgetMenus.map(renderWidgetMenuItem)}

        <div className="text-sm">
          <h2 className="font-semibold uppercase text-neutral-700 dark:text-neutral-200">
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
