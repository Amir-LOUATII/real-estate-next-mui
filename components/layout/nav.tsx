import { navLinks } from "@/utils/pathHelpers";

export default function Nav() {
  return (
    <nav className="flex space-x-2 items-center justify-center">
      {navLinks.map((link) => link.label)}
    </nav>
  );
}
