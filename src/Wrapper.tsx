import React, { useEffect, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderLogged from "./components/Header/HeaderLogged";
import useDarkMode from "./hooks/useDarkMode";
import Footer from "./shared/Footer/Footer";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar, en } from "./locales";

import "./styles/index.scss";
import "./styles/index.css";
import "./assets/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "rc-slider/assets/index.css";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng:
    localStorage.getItem("locale") || navigator.language.split("-")[0] || "ar", // if you're using a language detector, do not define the lng option
  fallbackLng: navigator.language.split("-")[0] || "ar",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

const Wrapper: React.FC = () => {
  useDarkMode();
  useEffect(() => {
    document.body.dir = i18n.language == "en" ? "ltr" : "rtl";
    document.documentElement.lang = i18n.language;
    if (i18n.language == "ar") {
      document.body.style.fontFamily = "Tajawal, sans-serif";
    } else {
      document.body.style.fontFamily = "Inter, sans-serif";
    }
  }, [i18n.language]);

  useLayoutEffect(() => {
    document.documentElement?.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="text-base bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <HeaderLogged />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Wrapper;
