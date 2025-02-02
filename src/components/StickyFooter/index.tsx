import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { getOverUnder, OverUnder } from "@/utils/calculate";
import { useRuneCalc } from "../RuneCalc";
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
  const {  heldRunes } = useRuneCalc();

  return (
    <div className={styles.StickyFooter}>
      {open ? <Summary /> : null}
      <div className={styles.Container}>
          <RuneCount />
          {heldRunes.length > 0 ? (
            <Button
              onClick={() => setOpen(!open)}
              className={styles.IconButton}
            >
              {open ? <MdExpandMore /> : <MdExpandLess />}
            </Button>
          ) : null}
      </div>
    </div>
  );
};

const RuneCount = () => {
  const { runesHeld, totalRunes, remainingNeeded } = useRuneCalc();
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
