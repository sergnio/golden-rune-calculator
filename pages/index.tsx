import styles from "../styles/Home.module.css";
import SoulCounter from "../components/atoms/SoulCounter/SoulCounter";
import useSoulCounter from "../components/atoms/SoulCounter/useSoulCounter";

export default () => {
  const props = useSoulCounter();

  return (
    <div>
      <main className={styles.main}>
        <SoulCounter {...props} />
      </main>
    </div>
  );
};
