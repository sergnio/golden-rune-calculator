import { getOverUnder, OverUnder } from "@/utils/calculate";
import { InventoryRune, useRuneCalc } from "../RuneCalc";
import styles from "./styles.module.scss";
import { useState } from "react";

const overUnderText = (totalNeeded: number, overUnder: OverUnder) => {
  if (overUnder === OverUnder["Over"]) {
    return (
      <>
        <span>Runes Left</span>{" "}
        <span data-over-under={overUnder}>+{Math.abs(totalNeeded)}</span>
      </>
    );
  }
  if (overUnder === OverUnder["Under"]) {
    return (
      <>
        <span></span>{" "}
        <span data-over-under={overUnder}>-{Math.abs(totalNeeded)}</span>
      </>
    );
  }

  return null;
};

export const Summary = () => {
  const { runes, runesHeld, runesNeeded, remainingNeeded } = useRuneCalc();

  const heldRunes = runes.filter((rune) => rune.count > 0);
  const overUnder = getOverUnder(remainingNeeded);

  return (
    <div className={styles.Content}>
      <header>
        <h1>
          <span className="big">C</span>onsum<span className="big">e</span>
        </h1>
      </header>
      <p className={styles.Row}>
        <span>Runes Held</span> <span>{runesHeld}</span>
      </p>
      <p className={styles.Row}>
        <span>Runes Needed</span> <span>{runesNeeded}</span>
      </p>
      {heldRunes.length > 0 ? (
        <section className={styles.List}>
          <p className={styles.Row}>Use: </p>
          {heldRunes.map((rune) => (
            <ConsumeRune key={rune.name} rune={rune} />
          ))}
        </section>
      ) : (
        <p>
          You have not selected any golden runes. Go back to the previous step
          and select some.
        </p>
      )}
      <p className={styles.Row}>{overUnderText(remainingNeeded, overUnder)}</p>
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
