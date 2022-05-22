import styles from "../../../styles/Home.module.css";
import SCStyles from "./SoulCounter.module.css";
import { allRunes } from "../../../constants/runes";
import { runeTotal } from "../../../utils/calculate";
import type { SoulCounterReturn as Props } from "./useSoulCounter";

export default ({
  increase,
  decrease,
  reset,
  runeCount,
  setExactCount,
}: Props) => (
  <>
    <div>
      <button onClick={reset}>reset</button>
    </div>
    <table className={SCStyles.table}>
      <tbody>
        {allRunes.map(({ id, label, soulsGiven }) => {
          const totalRunes = runeCount.find((r) => r.id === id)?.count;
          return (
            <tr key={id}>
              <td>
                <div className={SCStyles.label}>{label}</div>
              </td>
              <td>
                <div className={SCStyles.controls}>
                  <button className={SCStyles.button} onClick={increase(id)}>
                    +
                  </button>
                  <button
                    className={SCStyles.button}
                    disabled={!totalRunes}
                    onClick={decrease(id)}
                  >
                    -
                  </button>
                  <input
                    className={SCStyles.input}
                    type="number"
                    onChange={setExactCount(id)}
                    value={totalRunes}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <h2>total: {runeTotal(runeCount)}</h2>
  </>
);
