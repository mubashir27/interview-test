import { ThemeChanger } from "@/src/theme";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { IChildren } from "@/src/types/home";

const inter = Outfit({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Test App For Interview",
  description: "Created by Mubashir",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeChanger attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeChanger>
      </body>
    </html>
  );
}
