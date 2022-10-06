import { NavItemType } from "../shared/Navigation/NavigationItem";
import ncNanoId from "../utils/ncNanoId";

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [...otherPageChildMenus];
