import { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/atoms/Header";
import Script from "next/script";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Elden Ring Golden Rune Calculator</title>
        <meta
          name="description"
          content="A simple calculator to help optimize the number of runes to consume so you don't consume too many in Elden Ring."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/*  Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KCTJK4JDN7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KCTJK4JDN7');
        `}
      </Script>
      {/* End global site tag (gtag.js) - Google Analytics */}
      <Header />
      <main>{children}</main>
    </>
  );
};
