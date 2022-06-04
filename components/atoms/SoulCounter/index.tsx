import type { SoulCounterReturn as Props } from "./useSoulCounter";
import { allRunes } from "../../../constants/runes";
import { runeTotal } from "../../../utils/calculate";
import StickyFooter from "../StickyFooter";
import styles from "./styles.module.scss";

const SoulContainer = ({
  increase,
  decrease,
  reset,
  runeCount,
  setExactCount,
}: Props) => (
  <>
    <div className={styles.Container}>
      {allRunes.map(({ id, label, soulsGiven }) => {
        const totalRunes = runeCount.find((r) => r.id === id)?.count;

        return (
          <div key={id} className={styles.Row}>
            <div>
              <div className={styles.Label}>{label}</div>
              <div className={styles.SubLabel}>{soulsGiven} Runes</div>
            </div>
            <div>
              <div className={styles.controls}>
                <button
                  className={styles.button}
                  disabled={!totalRunes}
                  onClick={decrease(id)}
                >
                  <span>-</span>
                </button>
                <input
                  className={styles.input}
                  type="number"
                  onChange={setExactCount(id)}
                  value={totalRunes}
                />
                <button className={styles.button} onClick={increase(id)}>
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <StickyFooter total={runeTotal(runeCount)} reset={reset} />
  </>
);

export default SoulContainer;
