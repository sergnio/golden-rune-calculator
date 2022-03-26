import styles from "./Modal.module.css";
import { useState } from "react";
import { CalcReturn } from "../../../utils/calculate";

interface Props {
  open: boolean;
  toggleModal(): void;
  finalRunes: Undefinable<CalcReturn>;
}

export default ({ open, toggleModal, finalRunes }: Props) => (
  <>
    <button id="myBtn" onClick={toggleModal}>
      Open Modal
    </button>

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
            <p>Difference: {finalRunes.difference}</p>
            {finalRunes.runes.map((rune, index) => (
              <p key={index} className={styles.p}>
                {rune.label}, X{rune.count}
              </p>
            ))}
          </>
        ) : (
          <>No runes selected!</>
        )}
        <button onClick={toggleModal} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  </>
);
