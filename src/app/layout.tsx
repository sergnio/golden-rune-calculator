import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Elden Ring Golden Rune Calculator",
  description:
    "A simple calculator to help optimize the number of runes to consume so you don't consume too many in Elden Ring.",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
