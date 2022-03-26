import styles from "../../../styles/Home.module.css";
import { allRunes } from "../../../constants/runes";
import type { RuneCount } from "./useSoulCounter";

interface Props {
  increment: (souls: number, id: number) => () => void;
  decrease: (souls: number, id: number) => () => void;
  total: number;
  reset(): void;
  runeCount: InventoryRune[];
}

export default ({ increment, decrease, total, reset, runeCount }: Props) => (
  <>
    {allRunes.map(({ id, label, soulsGiven }) => (
      <div key={id} className={`${styles.flex} ${styles.spaced}`}>
        <span>{label}</span>
        <button onClick={increment(soulsGiven, id)}>+</button>
        <button
          disabled={!runeCount.find((r) => r.id === id)}
          onClick={decrease(soulsGiven, id)}
        >
          -
        </button>
        {runeCount.find((r) => r.id === id)?.count && (
          <span className={`${styles.fixed} ${styles.nomargin}`}>
            total: {runeCount.find((r) => r.id === id)?.count}
          </span>
        )}
      </div>
    ))}
    <h2>total: {total}</h2>
    <button onClick={reset}>reset</button>
  </>
);
