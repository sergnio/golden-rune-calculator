import { sendGAEvent } from "@next/third-parties/google";
import { Github } from "@/components/Github";
import styles from "./styles.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <div />
      <div className={styles.Links}>
        <a
          target="_blank"
          href="https://github.com/sergnio/golden-rune-calculator"
          rel="noreferrer"
          className={styles.Contribute}
          onClick={() => {
            sendGAEvent("event", "contribute");
          }}
        >
          <Github /> Contribute
        </a>
      </div>
    </nav>
  );
};
