import styles from "./Modal.module.css";
import { CalcReturn } from "../../../utils/calculate";

interface Props {
  open: boolean;
  toggleModal(): void;
  finalRunes: Undefinable<CalcReturn>;
}

export default ({ open, toggleModal, finalRunes }: Props) => {
  const overSpent =
    finalRunes && finalRunes.difference && finalRunes.difference < 0;
  const isExact = Boolean(finalRunes?.difference === 0);

  return (
    <>
      <div
        id="myModal"
        className={`${styles.modal} ${open ? styles.visible : styles.hidden}`}
      >
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={toggleModal}>
            &times;
          </span>
          {finalRunes?.runes.length ? (
            <>
              <p>
                {isExact
                  ? "Ahh, perfectly balanced."
                  : overSpent
                  ? "Over spend"
                  : "Still need"}{" "}
                <span
                  className={overSpent ? styles.outTheMoney : styles.inTheMoney}
                >
                  {finalRunes.difference}{" "}
                </span>
                runes {isExact && "left over"}
              </p>
              {finalRunes.runes.map((rune, index) => (
                <p key={index} className={styles.p}>
                  {rune.label}, X{rune.count}
                </p>
              ))}
            </>
          ) : (
            <p>No runes selected!</p>
          )}
          <button onClick={toggleModal} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};
