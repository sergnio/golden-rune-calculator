import Image from "next/image";
import Github from "../Github";
import Rune from "../../../assets/lordrune.png";
import styles from "./styles.module.scss";

const Header = () => (
  <nav className={styles.Nav}>
    <div className={styles.Logo}>
      <Image src={Rune} alt="golden rune" height={80} width={80} />
    </div>
    <div className={styles.Links}>
      <a
        target="_blank"
        href="https://github.com/sergnio/golden-rune-calculator"
        rel="noreferrer"
        className={styles.Contribute}
      >
        <Github /> Contribute
      </a>
    </div>
  </nav>
);

export default Header;
