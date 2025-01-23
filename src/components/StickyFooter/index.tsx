// import { GrPowerReset } from "react-icons/gr";
// import { MdOutlineChecklistRtl, MdEdit } from "react-icons/md";
import { getOverUnder, OverUnder } from "@/utils/calculate";
import styles from "./styles.module.scss";
import { useRuneCalc } from "../RuneCalc";

const getSign = (overUnder: OverUnder): string => {
  if (overUnder === OverUnder["Over"]) {
    return "+";
  }
  return "";
};

const StickyFooter = () => {
  const { runesHeld, runesNeeded } = useRuneCalc();

  const total = 100;

  const overUnder = getOverUnder(runesNeeded);
  const neededSign = getSign(overUnder);
  const neededText = `${neededSign}${-1 * runesNeeded}`;

  return (
    <div className={styles.StickyFooter}>
      <div className={styles.Container}>
        <div className={styles.Section}></div>
        <div className={styles.Section}>
          <div className={styles.Values}>
            <div className={styles.Value}>
              <div className={styles.ValueLabel}>Total:</div>
              <div className={styles.ValueValue}>{runesHeld + total}</div>
            </div>
            <div className={styles.Value}>
              <div className={styles.ValueLabel}>Needed:</div>
              <div className={styles.ValueValue} data-over-under={overUnder}>
                {neededText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
