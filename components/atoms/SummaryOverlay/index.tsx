import { Dispatch, SetStateAction } from "react";
import { SoulCounterReturn } from "@/components/atoms/SoulCounter/useSoulCounter";
import { getOverUnder, OverUnder } from "@/utils/calculate";
import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
} & SoulCounterReturn;

const overUnderText = (
  totalNeeded: SoulCounterReturn["totalNeeded"],
  overUnder: OverUnder
) => {
  if (overUnder === OverUnder["Over"]) {
    return (
      <>
        you will have enough runes with{" "}
        <span>{Math.abs(totalNeeded)} left over.</span>
      </>
    );
  }
  if (overUnder === OverUnder["Under"]) {
    return (
      <>
        you will not have enough runes with{" "}
        <span>{Math.abs(totalNeeded)} still needed.</span>
      </>
    );
  }

  return <>you will have just the right amount of runes!</>;
};

const SummaryOverlay: React.FC<Props> = ({
  open,
  held,
  needed,
  totalNeeded,
  setOpen,
  runeCount,
}) => {
  const runeCountHeld = runeCount.filter((rune) => rune.count > 0);
  const overUnder = getOverUnder(totalNeeded);

  return (
    <div className={styles.Overlay} data-open={open}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div>
            <h1 className={styles.H1}>Summary</h1>
          </div>
          <button className={styles.CloseButton} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <div className={styles.CountSection}>
          <p className={styles.P}>
            You have {held} runes and need {needed} runes.
          </p>
        </div>

        <div className={styles.CountSection}>
          <p className={styles.P}>If you consume:</p>
          <div className={styles.Counts}>
            {runeCountHeld.length > 0 ? (
              <>
                {runeCountHeld.map((rune) => (
                  <div key={rune.id} className={styles.Count}>
                    {rune.count} x {rune.label}
                  </div>
                ))}
              </>
            ) : (
              <div className={styles.Count}>No runes</div>
            )}
          </div>
        </div>

        <div className={styles.CountSection}>
          <p className={styles.P} data-over-under={overUnder}>
            {overUnderText(totalNeeded, overUnder)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryOverlay;
