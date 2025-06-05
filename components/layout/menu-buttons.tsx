import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MenuButtons() {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle />

      <div className="hidden md:flex gap-2">
        <Link href="/auth/signin">
          <Button variant="outline">Sign in</Button>
        </Link>
        <Link href="/auth/signup">
          <Button>Sign up</Button>
        </Link>
      </div>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="md:hidden"
        size="icon"
        // onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* {isMenuOpen ? <X /> : <Menu />} */}
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  );
}
