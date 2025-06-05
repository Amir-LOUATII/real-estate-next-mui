import { routes } from "@/utils/pathHelpers";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href={routes.home()} className="flex items-center space-x-2">
        <Home className="h-6 w-6" />
        <span className="font-bold text-xl">EstateHub</span>
      </Link>
    </div>
  );
}
