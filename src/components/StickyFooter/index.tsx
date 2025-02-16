import { sendGAEvent } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { getOverUnder, OverUnder } from "@/utils/calculate";
import {
  useHeldRunes,
  useRuneCalcStore,
  useTotalRunes,
} from "@/store/RuneCalc";
import { Summary } from "../Summary";
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

  // Add consumed runes to runes held and clear them out when summary is closed
  useEffect(() => {
    if (open === false) {
      consumeRunes();
    }
  }, [open, consumeRunes]);

  return (
    <div className={styles.StickyFooter}>
      {open ? <Summary /> : null}
      <button
        type="button"
        disabled={heldRuneCount === 0}
        onClick={() => {
          sendGAEvent("event", !open ? "stickyNavOpened" : "stickyNavClosed");
          return setOpen(!open);
        }}
        className={styles.Container}
      >
        <RuneCount />
        {heldRuneCount > 0 ? (
          <div className={styles.Icon}>
            {open ? <MdExpandMore /> : <MdExpandLess />}
          </div>
        ) : null}
      </button>
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
    <table className={styles.Values}>
      <tbody>
        <tr className={styles.Value}>
          <th className={styles.ValueLabel}>Total:</th>
          <td className={styles.ValueValue}>{totalRunesHeld}</td>
        </tr>
        <tr className={styles.Value}>
          <th className={styles.ValueLabel}>Needed:</th>
          <td className={styles.ValueValue} data-over-under={overUnder}>
            {neededText}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
