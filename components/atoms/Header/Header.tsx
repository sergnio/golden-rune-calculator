import Link from "next/link";
import Image from "next/image";
import Rune from "../../../assets/lordrune.png";
import { Routes } from "../../../infrastructure/routes";
import styles from "./Header.module.css";
import Github from "../Github";

export default () => (
  <header className={styles.header}>
    <Image
      src={Rune}
      className={styles.runeimage}
      alt="golden rune"
      height={100}
      width={100}
    />
    <nav className={styles.nav}>
      <Link href={Routes.home}>Simple</Link>
      <Link href={Routes.advancedRouteHeldRunesEntry}>Advanced</Link>
      <a
        target="_blank"
        href="https://github.com/sergnio/golden-rune-calculator"
        rel="noreferrer"
        className={styles.contribute}
      >
        <Github /> Contribute
      </a>
    </nav>
  </header>
);
