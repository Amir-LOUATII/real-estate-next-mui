import { cn } from "@/lib/utils";
import { navLinks } from "@/utils/pathHelpers";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MobileMenu() {
  return (
    <div className="md:hidden">
      <div className="space-y-1 px-4 py-3">
        {navLinks.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
              // route.active
              "bg-primary/10 text-primary",
              "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            // onClick={() => setIsMenuOpen(false)}
          >
            <route.icon className="h-4 w-4" />
            {route.label}
          </Link>
        ))}
        <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
          <Link href="/auth/signin">
            <Button variant="outline" className="w-full">
              Sign in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="w-full" variant={"secondary"}>
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
