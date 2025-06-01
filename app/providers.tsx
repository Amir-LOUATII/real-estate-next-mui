import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}
