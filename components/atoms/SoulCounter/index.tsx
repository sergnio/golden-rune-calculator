import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { allRunes } from "@/constants/runes";
import StickyFooter from "@/components/atoms/StickyFooter";
import ValueOverlay from "@/components/atoms/ValueOverlay";
import SummaryOverlay from "@/components/atoms/SummaryOverlay";
import NumberInput from "@/components/atoms/NumberInput";
import type { SoulCounterReturn as Props } from "./useSoulCounter";
import styles from "./styles.module.scss";

const SoulContainer = (props: Props) => {
  const { increase, decrease, runeCount, setExactCount } = props;
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const [summaryOpen, setSummaryOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.Container}>
        {allRunes.map(({ id, label, soulsGiven }) => {
          const totalRunes = runeCount.find((r) => r.id === id)!.count;
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
                    <MdRemove />
                  </button>
                  <NumberInput
                    className={styles.input}
                    onChange={setExactCount(id)}
                    value={totalRunes}
                  />
                  <button className={styles.button} onClick={increase(id)}>
                    <MdAdd />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <StickyFooter
        setSummaryOpen={setSummaryOpen}
        setOverlayOpen={setOverlayOpen}
        {...props}
      />
      <ValueOverlay open={overlayOpen} setOpen={setOverlayOpen} {...props} />
      <SummaryOverlay open={summaryOpen} setOpen={setSummaryOpen} {...props} />
    </>
  );
};

export default SoulContainer;
