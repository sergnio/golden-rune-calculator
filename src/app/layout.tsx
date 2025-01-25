import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Elden Ring Golden Rune Calculator",
  description:
    "A simple calculator to help optimize the number of runes to consume so you don't consume too many in Elden Ring.",
  icons: "/favicon.png",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-KCTJK4JDN7" />
      <body>{children}</body>
    </html>
  );
}
