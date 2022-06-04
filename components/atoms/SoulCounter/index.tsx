import { useState } from "react";
import type { SoulCounterReturn as Props } from "./useSoulCounter";
import { allRunes } from "@/constants/runes";
import { runeTotal } from "@/utils/calculate";
import StickyFooter from "@/components/atoms/StickyFooter";
import ValueOverlay from "@/components/atoms/ValueOverlay";
import styles from "./styles.module.scss";

const SoulContainer = (props: Props) => {
  const {
    increase,
    decrease,
    reset,
    runeCount,
    setExactCount,
    total,
    held,
    needed,
    setHeld,
    setNeeded,
  } = props;
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);

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
      <StickyFooter setOpenOverlay={setOverlayOpen} {...props} />
      <ValueOverlay open={overlayOpen} setOpen={setOverlayOpen} {...props} />
    </>
  );
};

export default SoulContainer;
