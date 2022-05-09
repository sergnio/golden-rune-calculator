import styles from "../../../styles/Home.module.css";
import SCStyles from "./SoulCounter.module.css";
import { allRunes } from "../../../constants/runes";
import type { SoulCounterReturn as Props } from "./useSoulCounter";

export default ({
  increment,
  decrease,
  total,
  reset,
  runeCount,
  setExactCount,
}: Props) => (
  <>
    <div>
      <button onClick={reset}>reset</button>
    </div>
    {allRunes.map(({ id, label, soulsGiven }) => {
      const totalRunes = runeCount.find((r) => r.id === id)?.count;
      return (
        <div key={id} className={`${styles.flex} ${styles.spaced}`}>
          <span>{label}</span>
          <button onClick={increment(soulsGiven, id)}>+</button>
          <button disabled={!totalRunes} onClick={decrease(soulsGiven, id)}>
            -
          </button>
          <input
            className={`${SCStyles.input}`}
            type="number"
            onChange={setExactCount(id)}
          />
          {runeCount.find((r) => r.id === id)?.count && (
            <span className={`${styles.fixed} ${styles.nomargin}`}>
              total: {totalRunes}
            </span>
          )}
        </div>
      );
    })}
    <h2>total: {total}</h2>
  </>
);
