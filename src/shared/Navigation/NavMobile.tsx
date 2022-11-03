import React from "react";
import ButtonClose from "../../shared/ButtonClose/ButtonClose";
import Logo from "../../shared/Logo/Logo";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { NavItemType } from "./NavigationItem";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import SocialsList from "../../shared/SocialsList/SocialsList";
import SwitchDarkMode from "../../shared/SwitchDarkMode/SwitchDarkMode";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import ncNanoId from "../../utils/ncNanoId";
import { useTranslation } from "react-i18next";

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const { t } = useTranslation();
  const data = [
    {
      id: ncNanoId(),
      href: "/",
      name: t("Home"),
    },
    {
      id: ncNanoId(),
      href: "/contact",
      name: t("Contact us"),
    },
  ];

  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className="pb-1 pl-6 text-base nav-mobile-sub-menu">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <NavLink
              to={{
                pathname: i.href || undefined,
              }}
              className={(active) =>
                `flex px-4 py-2.5 text-neutral-900 dark:text-neutral-200 text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-[2px] ${
                  active && "text-secondary"
                }`
              }
            >
              <span
                className={!i.children ? "block w-full" : ""}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="flex-grow block"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  >
                    <i
                      className="w-4 h-4 ml-2 text-neutral-500 bx bx-chevron-down"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </NavLink>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <NavLink
          className={(active) =>
            `flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg ${
              active && "text-secondary"
            }`
          }
          to={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? "block w-full" : ""}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="flex-grow block"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <i
                  className="w-4 h-4 ml-2 text-neutral-500 bx bx-chevron-down"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </NavLink>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="w-full h-screen max-w-sm py-2 overflow-y-auto transition transform bg-white divide-y-2 shadow-lg ring-1 dark:ring-neutral-700 dark:bg-neutral-900 divide-neutral-100 dark:divide-neutral-800">
      <div className="px-5 py-6">
        <Logo />
        <div className="flex flex-col mt-5 text-sm text-neutral-700 dark:text-neutral-300">
          <span>
            {t("hero_section_description1")} <br />{" "}
            {t("hero_section_description2")}
          </span>

          <div className="flex items-center justify-between mt-4">
            <SocialsList itemClass="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl" />
            <span className="block">
              <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div>
        </div>
        <span className="absolute p-1 right-2 top-2">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col px-2 py-6 space-y-1">
        {data.map(_renderItem)}
      </ul>
      <div className="flex items-center justify-between px-5 py-6 space-x-2">
        <ButtonPrimary >{t("Go To App")}</ButtonPrimary>
      </div>
    </div>
  );
};

export default NavMobile;
