import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar, en } from "./locales";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./styles/index.scss";
import "./index.css";
import "./assets/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "rc-slider/assets/index.css";
import useDarkMode from "./hooks/useDarkMode";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
