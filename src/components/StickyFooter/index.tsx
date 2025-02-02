import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { getOverUnder, OverUnder } from "@/utils/calculate";
import {
  calcHeldRunes,
  calcRemainingNeeded,
  calcTotalRunes,
  useRuneCalcStore,
} from "@/store/RuneCalc";
import { Summary } from "../Summary";
import { Button } from "../Button";
import styles from "./styles.module.scss";

const getSign = (overUnder: OverUnder): string => {
  if (overUnder === OverUnder["Over"]) {
    return "+";
  }
  return "";
};

export const StickyFooter = () => {
  const [open, setOpen] = useState(false);
  const runes = useRuneCalcStore((state) => state.runes);
  const heldRunes = calcHeldRunes({ runes });

  return (
    <div className={styles.StickyFooter}>
      {open ? <Summary /> : null}
      <div className={styles.Container}>
        <RuneCount />
        {heldRunes.length > 0 ? (
          <Button onClick={() => setOpen(!open)} className={styles.IconButton}>
            {open ? <MdExpandMore /> : <MdExpandLess />}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

const RuneCount = () => {
  const runes = useRuneCalcStore((state) => state.runes);
  const runesHeld = useRuneCalcStore((state) => state.runesHeld);
  const runesNeeded = useRuneCalcStore((state) => state.runesNeeded);

  const totalRunes = calcTotalRunes({ runes });
  const remainingNeeded = calcRemainingNeeded({
    runesHeld,
    runesNeeded,
    totalRunes,
  });

  const overUnder = getOverUnder(remainingNeeded);
  const neededSign = getSign(overUnder);
  const neededText = `${neededSign}${-1 * remainingNeeded}`;

  return (
    <div className={styles.Values}>
      <div className={styles.Value}>
        <div className={styles.ValueLabel}>Total:</div>
        <div className={styles.ValueValue}>{runesHeld + totalRunes}</div>
      </div>
      <div className={styles.Value}>
        <div className={styles.ValueLabel}>Needed:</div>
        <div className={styles.ValueValue} data-over-under={overUnder}>
          {neededText}
        </div>
      </div>
    </div>
  );
};
