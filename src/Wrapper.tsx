import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLogged from "./components/Header/HeaderLogged";
import useDarkMode from "./hooks/useDarkMode";
import Footer from "./shared/Footer/Footer";

const Wrapper: React.FC = () => {
  useDarkMode();
  return (
    <div className="text-base bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <HeaderLogged />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Wrapper;
