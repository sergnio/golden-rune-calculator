import Header from "./atoms/Header";
import styles from "../styles/Home.module.css";
import { ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Golden Rune Calculator</title>
        <meta
          name="description"
          content="Golden Rune Calculator for Elden Ring"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer className={`${styles.bottom} ${styles.smallText}`}>
        Contribute to the code{" "}
        <a
          target="_blank"
          href="https://github.com/sergnio/golden-rune-calculator"
          rel="noreferrer"
        >
          here
        </a>
        !
      </footer>
    </>
  );
};
