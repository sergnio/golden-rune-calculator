import { Dispatch, SetStateAction } from "react";
import { SoulCounterReturn } from "@/components/atoms/SoulCounter/useSoulCounter";
import Modal from "@/components/atoms/Modal";
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
    <Modal open={open} setOpen={setOpen} title="Summary">
      <p>
        You have {held} runes and need {needed} runes.
      </p>
      <p>If you consume:</p>
      <p className={styles.Counts}>
        {runeCountHeld.length > 0 ? (
          <>
            {runeCountHeld.map((rune) => (
              <div key={rune.id}>
                {rune.count} x {rune.label}
              </div>
            ))}
          </>
        ) : (
          <div>No runes</div>
        )}
      </p>
      <p data-over-under={overUnder}>{overUnderText(totalNeeded, overUnder)}</p>
    </Modal>
  );
};

export default SummaryOverlay;
