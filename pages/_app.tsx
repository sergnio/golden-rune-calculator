import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Header from "components/molecules/Header";
import "styles/globals.scss";

export default ({ Component, pageProps }: AppProps) => {
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
      <GTag />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

const GTag = () => (
  <>
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
  </>
);
