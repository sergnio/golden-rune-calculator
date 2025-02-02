import { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { getOverUnder, OverUnder } from "@/utils/calculate";
import {
  useHeldRunes,
  useRuneCalcStore,
  useTotalRunes,
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
  const heldRunes = useHeldRunes();
  const heldRuneCount = heldRunes.length;
  const consumeRunes = useRuneCalcStore((state) => state.consumeRunes);

  // Close summary if no runes are selected
  useEffect(() => {
    if (heldRuneCount === 0 && open) {
      setOpen(false);
    }
  }, [open, heldRuneCount]);

  // Add consume runes when summary closed
  useEffect(() => {
    if (open === false) {
      consumeRunes();
    }
  }, [open, consumeRunes]);

  return (
    <div className={styles.StickyFooter}>
      {open ? <Summary /> : null}
      <div className={styles.Container}>
        <RuneCount />
        {heldRuneCount > 0 ? (
          <Button onClick={() => setOpen(!open)} className={styles.IconButton}>
            {open ? <MdExpandMore /> : <MdExpandLess />}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

const RuneCount = () => {
  // Values entered in the beginning
  const runesHeld = useRuneCalcStore((state) => state.runesHeld);
  const runesNeeded = useRuneCalcStore((state) => state.runesNeeded);

  // Sum values
  const runesAdded = useTotalRunes();
  const totalRunesHeld = runesHeld + runesAdded;
  const remainingNeeded = runesNeeded - totalRunesHeld;

  // Visual helpers
  const overUnder = getOverUnder(remainingNeeded);
  const neededSign = getSign(overUnder);
  const neededText = `${neededSign}${-1 * remainingNeeded}`;

  return (
    <div className={styles.Values}>
      <div className={styles.Value}>
        <div className={styles.ValueLabel}>Total:</div>
        <div className={styles.ValueValue}>{totalRunesHeld}</div>
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
