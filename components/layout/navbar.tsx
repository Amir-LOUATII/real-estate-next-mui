import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import Nav from "./nav";

export default function Navbar() {
  return (
    <header className="w-full px-3 py-2">
      <div className="mx-auto container relative">
        <Logo />
        <Nav />
        <MobileMenu />
      </div>
    </header>
  );
}
