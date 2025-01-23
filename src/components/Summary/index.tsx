import { getOverUnder, OverUnder } from "@/utils/calculate";
import { useRuneCalc } from "../RuneCalc";
import styles from "./styles.module.scss";

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
            <>
              <p key={rune.name} className={styles.Row}>
                <span>
                  <span className={styles.Count}>{rune.count}</span> &times;{" "}
                  {rune.name}
                </span>
              </p>
            </>
          ))}
        </section>
      ) : null}
      <p className={styles.Row}>{overUnderText(remainingNeeded, overUnder)}</p>
    </div>
  );
};
