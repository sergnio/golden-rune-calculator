import { useState } from "react";
import { useRuneCalcStore, InventoryRune } from "@/store/RuneCalc";
import styles from "./styles.module.scss";

export const Summary = () => {
  const heldRunes = useRuneCalcStore((state) => state.heldRunes);

  return (
    <div className={styles.Content}>
      <div className={styles.List}>
        <p className={styles.Title}>Use: </p>
        {heldRunes().map((rune) => (
          <ConsumeRune key={rune.name} rune={rune} />
        ))}
      </div>
    </div>
  );
};

const ConsumeRune = ({ rune }: { rune: InventoryRune }) => {
  const [consumed, setConsumed] = useState(false);

  return (
    <label className={styles.Rune} data-consumed={consumed}>
      <input
        type="checkbox"
        checked={consumed}
        onChange={() => setConsumed(!consumed)}
      />
      <div className={styles.RuneLabel}>
        <span className={styles.Count}>{rune.count}</span> &times; {rune.name}
      </div>
    </label>
  );
};
