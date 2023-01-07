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
    return (
      <>
        <span>Runes Left</span>{" "}
        <span data-over-under={overUnder}>+{Math.abs(totalNeeded)}</span>
      </>
    );
  }
  if (overUnder === OverUnder["Under"]) {
    return (
      <>
        <span></span>{" "}
        <span data-over-under={overUnder}>{Math.abs(totalNeeded)}</span>
      </>
    );
  }

  return null;
};

const ModalSummary: React.FC<Props> = ({ open, setOpen }) => {
  const { held, needed, totalNeeded, runeCount } =
    useContext(SoulCounterContext);
  const runeCountHeld = runeCount.filter((rune) => rune.count > 0);
  const overUnder = getOverUnder(totalNeeded);

  return (
    <Modal open={open} setOpen={setOpen} title="Summary">
      <div className={styles.Content}>
        <p className={styles.Row}>
          <span>Runes Held</span> <span>{held}</span>
        </p>
        <p className={styles.Row}>
          <span>Runes Needed</span> <span>{needed}</span>
        </p>
        {runeCountHeld.length > 0 ? (
          <>
            {runeCountHeld.map((rune, index) => (
              <>
                <p key={rune.souls} className={styles.Row}>
                  <span>{index === 0 && <>Consume</>}</span>
                  <span>
                    <span className={styles.Count}>{rune.count}</span> &times;{" "}
                    {rune.name}
                  </span>
                </p>
              </>
            ))}
          </>
        ) : null}
        <p className={styles.Row}>{overUnderText(totalNeeded, overUnder)}</p>
      </div>
    </Modal>
  );
};

export default ModalSummary;
