import Header from "./atoms/Header";
import styles from "../styles/Home.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  return (
    <>
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
