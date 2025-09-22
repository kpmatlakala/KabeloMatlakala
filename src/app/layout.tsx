import type { Metadata } from "next";

import "../styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "Kabelo P. Matlakala | Portfolio",
  description: "Built with Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-montserrat", "theme-transition")}>
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}



