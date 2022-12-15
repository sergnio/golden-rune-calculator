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
    return <span>{Math.abs(totalNeeded)} runes left over</span>;
  }
  if (overUnder === OverUnder["Under"]) {
    return <span>{Math.abs(totalNeeded)} runes still needed</span>;
  }

  return null;
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
      <div className={styles.Content}>
        <p>{held} runes held</p>
        {runeCountHeld.length > 0 ? (
          <>
            {runeCountHeld.map((rune) => (
              <p key={rune.id}>
                <span className={styles.Count}>{rune.count}</span> &times;{" "}
                {rune.label}
              </p>
            ))}
          </>
        ) : null}
        <p>
          {needed} runes needed
          <br />
          <span data-over-under={overUnder}>
            {overUnderText(totalNeeded, overUnder)}
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default SummaryOverlay;
