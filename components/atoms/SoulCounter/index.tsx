import { useState } from "react";
import type { SoulCounterReturn as Props } from "./useSoulCounter";
import { allRunes } from "@/constants/runes";
import { runeTotal } from "@/utils/calculate";
import StickyFooter from "@/components/atoms/StickyFooter";
import ValueOverlay from "@/components/atoms/ValueOverlay";
import styles from "./styles.module.scss";

const SoulContainer = ({
  increase,
  decrease,
  reset,
  runeCount,
  setExactCount,
}: Props) => {
  const [runesHeld, setRunesHeld] = useState<number>(0);
  const [runesNeeded, setRunesNeeded] = useState<number>(0);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const total = runeTotal(runeCount);
  const needed = runesNeeded - (runesHeld + total);
  const resetAll = () => {
    reset();
    setRunesHeld(0);
    setRunesNeeded(0);
  };

  return (
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
      <StickyFooter
        needed={needed}
        held={runesHeld}
        total={total}
        reset={resetAll}
        setOpenOverlay={setOverlayOpen}
      />
      <ValueOverlay
        open={overlayOpen}
        setOpen={setOverlayOpen}
        runesHeld={runesHeld}
        runesNeeded={runesNeeded}
        setRunesHeld={setRunesHeld}
        setRunesNeeded={setRunesNeeded}
      />
    </>
  );
};

export default SoulContainer;
