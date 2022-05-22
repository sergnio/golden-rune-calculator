import Link from "next/link";
import Image from "next/image";
import Rune from "../../../assets/lordrune.png";
import { Routes } from "../../../infrastructure/routes";
import styles from "./Header.module.css";

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
      <Link href={Routes.home}>simple calculator</Link>
      <Link href={Routes.advancedRouteHeldRunesEntry}>advanced calculator</Link>
    </nav>
  </header>
);
