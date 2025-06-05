import Logo from "./logo";
import MenuButtons from "./menu-buttons";
import MobileMenu from "./mobile-menu";
import Nav from "./nav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 md:px-6 lg:px-8">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Logo />
        <Nav />
        <MenuButtons />
      </div>
      <MobileMenu />
    </header>
  );
}
