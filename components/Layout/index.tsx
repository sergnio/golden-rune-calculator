import { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/atoms/Header";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Golden Rune Calculator</title>
        {/*  Global site tag (gtag.js) - Google Analytics */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KCTJK4JDN7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-KCTJK4JDN7');
                </script>`,
          }}
        />
        {/* End global site tag (gtag.js) - Google Analytics */}
        <meta
          name="description"
          content="Golden Rune Calculator for Elden Ring"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};
