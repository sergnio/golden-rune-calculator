import { Dispatch, SetStateAction, useContext } from "react";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineChecklistRtl, MdEdit } from "react-icons/md";
import { getOverUnder, OverUnder } from "utils/calculate";
import Button from "components/atoms/Button";
import { SoulCounterContext } from "context/SoulCounter";
import styles from "./styles.module.scss";

const getSign = (overUnder: OverUnder): string => {
  if (overUnder === OverUnder["Over"]) {
    return "+";
  }
  return "";
};

type Props = {
  setOverlayOpen: Dispatch<SetStateAction<boolean>>;
  setSummaryOpen: Dispatch<SetStateAction<boolean>>;
};

const StickyFooter = ({ setOverlayOpen, setSummaryOpen }: Props) => {
  const { totalNeeded, total, held, reset } = useContext(SoulCounterContext);
  const overUnder = getOverUnder(totalNeeded);
  const neededSign = getSign(overUnder);
  const neededText = `${neededSign}${-1 * totalNeeded}`;

  return (
    <div className={styles.StickyFooter}>
      <div className={styles.Container}>
        <div className={styles.Section}>
          <Button onClick={() => setSummaryOpen(true)}>
            <MdOutlineChecklistRtl />
          </Button>
        </div>
        <div className={styles.Section}>
          <Button id="reset" onClick={reset}>
            <GrPowerReset />
          </Button>
          <Button onClick={() => setOverlayOpen(true)}>
            <MdEdit />
          </Button>
          <div className={styles.Values}>
            <div className={styles.Value}>
              <div className={styles.ValueLabel}>Total:</div>
              <div className={styles.ValueValue}>{held + total}</div>
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
