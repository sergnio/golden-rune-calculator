import Image from "next/image";
import styles from "../styles/Home.module.css";
import Rune from "../assets/lordrune.png";
import SoulCounter from "../components/atoms/SoulCounter/SoulCounter";
import useSoulCounter from "../components/atoms/SoulCounter/useSoulCounter";

export default () => {
  const props = useSoulCounter();

  return (
    <div>
      <main className={styles.main}>
        <Image
          src={Rune}
          className={styles.runeimage}
          alt="image of a golden rune"
        />
        <SoulCounter {...props} />
      </main>
    </div>
  );
};
