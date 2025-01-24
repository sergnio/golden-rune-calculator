import Image from "next/image";
import { Github } from "@/components/Github";
import styles from "./styles.module.scss";
import { useRuneCalc } from "../RuneCalc";
import { useScreens } from "../Screens";

export const Nav = () => {
  const { reset } = useRuneCalc();
  const { setScreen } = useScreens();

  return (
    <nav className={styles.Nav}>
      <button
        className={styles.Logo}
        type="button"
        onClick={() => {
          reset();
          setScreen("enter-runes");
        }}
      >
        <Image src="/lordrune.png" alt="golden rune" height={80} width={80} />
      </button>
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
};
