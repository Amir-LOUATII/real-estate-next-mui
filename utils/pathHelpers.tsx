import { ElementType } from "react";
import { Home, Search, QuestionMark, Mail } from "lucide-react";
export type NavLink = {
  href: string;
  external: boolean;
  label: string;
  icon: ElementType;
};
export const routes = {
  home: () => "/",
  login() {
    return "/auth/login";
  },
  register() {
    return "/auth/register";
  },
  properties() {
    return "/properties";
  },
  about() {
    return "/about";
  },
  contact() {
    return "/contact";
  },
};

export const navLinks = [
  { href: routes.home(), external: false, label: "Accueil", icon: Home },
  {
    href: routes.properties(),
    external: false,
    label: "Properties",
    icon: Search,
  },
  {
    href: routes.about(),
    external: false,
    label: "About",
    icon: QuestionMark,
  },
  {
    href: routes.about(),
    external: false,
    label: "Contact",
    icon: Mail,
  },
];
