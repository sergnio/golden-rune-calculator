import { Dispatch, SetStateAction, useContext } from "react";
import Modal from "components/atoms/Modal";
import { SoulCounterContext } from "context/SoulCounter";
import { getOverUnder, OverUnder } from "utils/calculate";
import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const overUnderText = (totalNeeded: number, overUnder: OverUnder) => {
  if (overUnder === OverUnder["Over"]) {
    return <span>{Math.abs(totalNeeded)} runes left over</span>;
  }
  if (overUnder === OverUnder["Under"]) {
    return <span>{Math.abs(totalNeeded)} runes still needed</span>;
  }

  return null;
};

const SummaryOverlay: React.FC<Props> = ({ open, setOpen }) => {
  const { held, needed, totalNeeded, runeCount } =
    useContext(SoulCounterContext);
  const runeCountHeld = runeCount.filter((rune) => rune.count > 0);
  const overUnder = getOverUnder(totalNeeded);

  return (
    <Modal open={open} setOpen={setOpen} title="Summary">
      <div className={styles.Content}>
        <p>{held} runes held</p>
        {runeCountHeld.length > 0 ? (
          <>
            {runeCountHeld.map((rune) => (
              <p key={rune.souls}>
                <span className={styles.Count}>{rune.count}</span> &times;{" "}
                {rune.name}
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
