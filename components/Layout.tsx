import styles from "../styles/Home.module.css";
import { ReactNode } from "react";
import Head from "next/head";
import Header from "./atoms/Header";

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
    </>
  );
};
