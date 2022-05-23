import Link from "next/link";
import Image from "next/image";
import Rune from "../../../assets/lordrune.png";
import { Routes } from "../../../infrastructure/routes";
import Github from "../Github";
import styles from "./styles.module.scss";

const Header = () => (
  <nav className={styles.Nav}>
    <div className={styles.Logo}>
      <Image src={Rune} alt="golden rune" height={80} width={80} />
    </div>
    <div className={styles.Links}>
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
    </div>
  </nav>
);

export default Header;
