import { navLinks } from "@/utils/pathHelpers";
import NavItem from "./nav-item";

export default function Nav() {
  return (
    <nav className="mx-6 hidden items-center space-x-4 md:flex lg:space-x-6">
      {navLinks.map((route) => (
        <NavItem href={route.href} label={route.label} key={route.label} />
      ))}
    </nav>
  );
}
