import { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { getOverUnder, OverUnder } from "@/utils/calculate";
import {
  useHeldRunes,
  useRemainingNeeded,
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

  useEffect(() => {
    if (heldRuneCount === 0 && open) {
      setOpen(false);
    }
  }, [open, heldRuneCount]);

  return (
    <div className={styles.StickyFooter}>
      {open ? <Summary /> : null}
      <button
        type="button"
        disabled={heldRuneCount === 0}
        onClick={() => setOpen(!open)}
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
  const runesHeld = useRuneCalcStore((state) => state.runesHeld);
  const totalRunes = useTotalRunes();
  const remainingNeeded = useRemainingNeeded();

  const overUnder = getOverUnder(remainingNeeded);
  const neededSign = getSign(overUnder);
  const neededText = `${neededSign}${-1 * remainingNeeded}`;

  return (
    <table className={styles.Values}>
      <tbody>
        <tr className={styles.Value}>
          <th className={styles.ValueLabel}>Total:</th>
          <td className={styles.ValueValue}>{runesHeld + totalRunes}</td>
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
