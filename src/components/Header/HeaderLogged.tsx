import React, { FC } from "react";
import Logo from "../../shared/Logo/Logo";
import MenuBar from "../../shared/MenuBar/MenuBar";
import SwitchDarkMode from "../../shared/SwitchDarkMode/SwitchDarkMode";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import Navigation from "../../shared/Navigation/Navigation";
import LocalesDropDown from "./LocalesDropDown";
import { APP_URL } from "../../constant";
import { useTranslation } from "react-i18next";
export interface HeaderLoggedProps {}

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  const { t } = useTranslation();
  return (
    <div className="relative z-40 w-full nc-HeaderLogged ">
      {/* NAV */}
      <div className={`nc-MainNav2Logged relative z-10 ${"onTop "}`}>
        <div className="container relative flex items-center justify-between py-5 space-x-4 xl:space-x-8">
          <div className="flex items-center justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo />
          </div>
          <div className="flex items-center justify-end flex-shrink-0 space-x-1 text-neutral-700 dark:text-neutral-100">
            <div className="items-center hidden space-x-2 xl:flex">
              <Navigation />
              <div className="hidden h-6 border-l sm:block border-neutral-300 dark:border-neutral-6000"></div>
              <div className="flex">
                <SwitchDarkMode />
                <LocalesDropDown />
              </div>
              <ButtonPrimary
                onClick={() => {
                  window.open(APP_URL, "_blank");
                }}
                sizeClass="px-4 py-2 sm:px-5"
              >
                {t("Go To App")}
              </ButtonPrimary>
            </div>
            <div className="flex items-center space-x-3 xl:hidden">
              <LocalesDropDown />
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogged;
