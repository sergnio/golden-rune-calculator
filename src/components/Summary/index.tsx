import {
  InventoryRune,
  useHeldRunes,
  useRuneCalcStore,
} from "@/store/RuneCalc";
import styles from "./styles.module.scss";

export const Summary = () => {
  const heldRunes = useHeldRunes();

  return (
    <div className={styles.Content}>
      <div className={styles.List}>
        <p className={styles.Title}>Use: </p>
        {heldRunes.map((rune) => (
          <ConsumeRune key={rune.name} rune={rune} />
        ))}
      </div>
    </div>
  );
};

const ConsumeRune = ({ rune }: { rune: InventoryRune }) => {
  const consumeRune = useRuneCalcStore((state) => state.consumeRune);

  return (
    <label className={styles.Rune} data-consumed={rune.consumed}>
      <input
        type="checkbox"
        checked={rune.consumed}
        onChange={() => consumeRune(rune, !rune.consumed)}
      />
      <div className={styles.RuneLabel}>
        <span className={styles.Count}>{rune.count}</span> &times; {rune.name}
      </div>
    </label>
  );
};
