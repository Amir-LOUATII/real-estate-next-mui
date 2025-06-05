import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
