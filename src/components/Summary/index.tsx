import { useState } from "react";
import { InventoryRune, useRuneCalc } from "../RuneCalc";
import styles from "./styles.module.scss";

export const Summary = () => {
  const { runes } = useRuneCalc();

  const heldRunes = runes.filter((rune) => rune.count > 0);

  return (
    <div className={styles.Content}>
      <header>
        <h1>
          <span className="big">C</span>onsum<span className="big">e</span>
        </h1>
      </header>
      {heldRunes.length > 0 ? (
        <div className={styles.List}>
          <p className={styles.Row}>Use: </p>
          {heldRunes.map((rune) => (
            <ConsumeRune key={rune.name} rune={rune} />
          ))}
        </div>
      ) : (
        <p>
          You have not selected any golden runes. Go back to the previous step
          and select some.
        </p>
      )}
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
