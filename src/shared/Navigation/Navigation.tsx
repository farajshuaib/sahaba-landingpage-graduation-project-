import React from "react";
import NavigationItem from "./NavigationItem";
import ncNanoId from "../../utils/ncNanoId";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();
  return (
    <ul className="relative hidden nc-Navigation lg:flex lg:flex-wrap lg:items-center lg:space-x-1">
      {[
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
      ].map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
